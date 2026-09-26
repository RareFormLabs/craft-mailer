<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\services;

use Craft;
use craft\elements\Asset;
use craft\helpers\App;
use craft\helpers\Assets as AssetsHelper;
use craft\helpers\FileHelper;
use craft\helpers\StringHelper;
use craft\mail\Message;
use rareform\mailer\db\Table;
use rareform\mailer\models\ComposeForm;
use rareform\mailer\models\Send;
use rareform\mailer\Plugin;
use Throwable;
use yii\base\Component;
use yii\base\Exception;
use yii\db\Query;

/**
 * Stores attachments for the duration of a send.
 *
 * Uploaded files and copies of selected assets are written to `{attachmentsPath}/{sendUid}/` before the send is
 * queued, so they’re still available when the queue runs, and deleted once the send completes.
 */
class Attachments extends Component
{
    /**
     * Validates the attachments of a compose form, adding errors to it.
     */
    public function validate(ComposeForm $form): bool
    {
        $maxSize = Plugin::getInstance()->getSettings()->maxAttachmentSize;
        $allowed = Craft::$app->getConfig()->getGeneral()->allowedFileExtensions;
        $total = 0;

        foreach ($form->uploads as $upload) {
            if ($upload->getHasError()) {
                $form->addError('uploads', Craft::t('mailer', 'Couldn’t upload “{name}”.', ['name' => $upload->name]));
                continue;
            }

            $extension = strtolower(pathinfo($upload->name, PATHINFO_EXTENSION));

            if (!in_array($extension, $allowed, true)) {
                $form->addError('uploads', Craft::t('mailer', '“{name}” isn’t an allowed file type.', ['name' => $upload->name]));
            }

            $total += (int)$upload->size;
        }

        if ($form->assetIds) {
            $assets = Asset::find()->id($form->assetIds)->status(null)->all();

            if (count($assets) !== count($form->assetIds)) {
                $form->addError('assetIds', Craft::t('mailer', 'One or more selected assets no longer exist.'));
            }

            foreach ($assets as $asset) {
                $total += (int)$asset->size;
            }
        }

        if ($maxSize > 0 && $total > $maxSize) {
            $form->addError('uploads', Craft::t('mailer', 'Attachments can’t be larger than {size} combined.', [
                'size' => Craft::$app->getFormatter()->asShortSize($maxSize),
            ]));
        }

        return !$form->hasErrors('uploads') && !$form->hasErrors('assetIds');
    }

    /**
     * Stores a form’s attachments under the given key.
     *
     * @return array<int, array{source: string, assetId?: int, filename: string, path: string, mimeType: string|null, size: int}>
     * @throws Exception
     */
    public function store(ComposeForm $form, string $key): array
    {
        $dir = $this->getDirectory($key);
        FileHelper::createDirectory($dir);
        $attachments = [];
        $used = [];

        try {
            foreach ($form->uploads as $upload) {
                $filename = $this->uniqueFilename($upload->name, $used);
                $path = $dir . DIRECTORY_SEPARATOR . $filename;

                if (!$upload->saveAs($path, false)) {
                    throw new Exception("Couldn’t save the uploaded file “{$upload->name}”.");
                }

                $attachments[] = [
                    'source' => 'upload',
                    'filename' => $filename,
                    'path' => $path,
                    'mimeType' => FileHelper::getMimeTypeByExtension($filename) ?? $upload->type ?: null,
                    'size' => (int)filesize($path),
                ];
            }

            if ($form->assetIds) {
                $assets = Asset::find()->id($form->assetIds)->status(null)->fixedOrder()->all();

                foreach ($assets as $asset) {
                    /** @var Asset $asset */
                    $filename = $this->uniqueFilename($asset->getFilename(), $used);
                    $path = $dir . DIRECTORY_SEPARATOR . $filename;
                    $tempPath = $asset->getCopyOfFile();

                    if (!@rename($tempPath, $path)) {
                        copy($tempPath, $path);
                        @unlink($tempPath);
                    }

                    $attachments[] = [
                        'source' => 'asset',
                        'assetId' => (int)$asset->id,
                        'filename' => $filename,
                        'path' => $path,
                        'mimeType' => $asset->getMimeType(),
                        'size' => (int)filesize($path),
                    ];
                }
            }
        } catch (Throwable $e) {
            $this->delete($key);
            throw $e instanceof Exception ? $e : new Exception($e->getMessage(), 0, $e);
        }

        if (!$attachments) {
            $this->delete($key);
        }

        return $attachments;
    }

    /**
     * Attaches stored files to a message.
     *
     * @throws Exception if a file is missing
     */
    public function attach(Message $message, array $attachments): void
    {
        foreach ($attachments as $attachment) {
            if (!is_file($attachment['path'])) {
                throw new Exception(Craft::t('mailer', 'The attachment “{name}” is missing. Make sure the attachments path is shared with the server that runs the queue.', [
                    'name' => $attachment['filename'],
                ]));
            }

            $message->attach($attachment['path'], array_filter([
                'fileName' => $attachment['filename'],
                'contentType' => $attachment['mimeType'] ?? null,
            ]));
        }
    }

    /**
     * Deletes the attachments stored under a key.
     */
    public function delete(string $key): void
    {
        try {
            FileHelper::removeDirectory($this->getDirectory($key));
        } catch (Throwable $e) {
            Craft::warning("Couldn’t delete Mailer attachments for “{$key}”: {$e->getMessage()}", __METHOD__);
        }
    }

    /**
     * Deletes the attachments of a send.
     */
    public function deleteForSend(Send $send): void
    {
        if ($send->uid) {
            $this->delete($send->uid);
        }
    }

    /**
     * Deletes attachment folders that no longer belong to an active send (garbage collection).
     */
    public function gc(): void
    {
        $base = $this->getBasePath();

        if (!is_dir($base)) {
            return;
        }

        $active = (new Query())
            ->select(['uid'])
            ->from(Table::SENDS)
            ->where(['status' => Send::ACTIVE_STATUSES])
            ->column();
        $active = array_flip($active);
        $cutoff = time() - 86400;

        foreach (FileHelper::findDirectories($base, ['recursive' => false]) as $dir) {
            $key = basename($dir);

            if (!isset($active[$key]) && filemtime($dir) < $cutoff) {
                $this->delete($key);
            }
        }
    }

    /**
     * Returns the directory attachments are stored in for a key.
     */
    public function getDirectory(string $key): string
    {
        if (!preg_match('/^[\w-]+$/', $key)) {
            throw new Exception('Invalid attachments key.');
        }

        return $this->getBasePath() . DIRECTORY_SEPARATOR . $key;
    }

    /**
     * Returns the base attachments path.
     */
    public function getBasePath(): string
    {
        return FileHelper::normalizePath(App::parseEnv(Plugin::getInstance()->getSettings()->attachmentsPath));
    }

    /**
     * Returns a new random key for temporary attachments (e.g. test emails).
     */
    public function createTempKey(): string
    {
        return 'tmp-' . StringHelper::UUID();
    }

    private function uniqueFilename(string $filename, array &$used): string
    {
        $filename = AssetsHelper::prepareAssetName($filename) ?: 'attachment';
        $name = pathinfo($filename, PATHINFO_FILENAME);
        $extension = pathinfo($filename, PATHINFO_EXTENSION);
        $candidate = $filename;
        $i = 1;

        while (isset($used[strtolower($candidate)])) {
            $candidate = sprintf('%s-%d%s', $name, ++$i, $extension !== '' ? ".$extension" : '');
        }

        $used[strtolower($candidate)] = true;

        return $candidate;
    }
}
