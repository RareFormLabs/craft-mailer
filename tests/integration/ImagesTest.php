<?php

namespace rareform\mailer\tests\integration;

use Craft;
use craft\elements\Asset;
use craft\fs\Local;
use craft\models\Volume;
use rareform\mailer\models\Send;

class ImagesTest extends IntegrationTestCase
{
    private string $volumesPath;

    protected function _before(): void
    {
        parent::_before();
        $this->volumesPath = sys_get_temp_dir() . '/mailer-test-volumes/' . uniqid();
    }

    protected function _after(): void
    {
        \craft\helpers\FileHelper::removeDirectory($this->volumesPath);
        parent::_after();
    }

    public function testLinkedImagesUsePublicUrls(): void
    {
        $asset = $this->createImage('publicImages', true);
        $user = $this->createUser('viewer');
        $form = $this->imageForm($asset, $user, false);

        $this->assertTrue($this->plugin->getImages()->validate($form), json_encode($form->getErrors()));
        $send = $this->runSend($this->createSend($form));

        $this->assertSame(Send::STATUS_FINISHED, $send->status);
        $html = $this->sentEmails()[$user->email]->getSymfonyEmail()->getHtmlBody();
        $this->assertMatchesRegularExpression('#<img[^>]+src="https?://[^"]+/photo-publicImages\.png"#', $html);
        $this->assertStringContainsString('alt="', $html);
        $this->assertStringNotContainsString('data-asset-id', $html);
    }

    public function testPrivateImagesMustBeEmbedded(): void
    {
        $asset = $this->createImage('privateImages', false);
        $user = $this->createUser('private');

        $linked = $this->imageForm($asset, $user, false);
        $this->assertFalse($this->plugin->getImages()->validate($linked));
        $this->assertStringContainsString('isn’t publicly accessible', $linked->getFirstError('bodyJson'));

        $embedded = $this->imageForm($asset, $user, true);
        $this->assertTrue($this->plugin->getImages()->validate($embedded));
        $send = $this->runSend($this->createSend($embedded));

        $this->assertSame(Send::STATUS_FINISHED, $send->status);
        $email = $this->sentEmails()[$user->email]->getSymfonyEmail();
        $this->assertStringContainsString('src="cid:image-' . $asset->id, $email->getHtmlBody());
        $this->assertCount(1, $email->getAttachments(), 'The image travels with the email');
    }

    private function imageForm(Asset $asset, \craft\elements\User $user, bool $embed): \rareform\mailer\models\ComposeForm
    {
        $content = [
            ['type' => 'paragraph', 'content' => [['type' => 'text', 'text' => 'Look:']]],
            ['type' => 'image', 'attrs' => ['src' => 'https://ignored.example/x.png', 'assetId' => $asset->id]],
        ];

        return $this->form(['bodyJson' => json_encode($content), 'embedImages' => $embed, 'sendToUsers' => true, 'userIds' => [$user->id]]);
    }

    private function createImage(string $handle, bool $public): Asset
    {
        $path = "$this->volumesPath/$handle";
        $fsService = Craft::$app->getFs();
        $fs = $fsService->createFilesystem([
            'type' => Local::class,
            'name' => $handle,
            'handle' => $handle,
            'settings' => ['path' => $path, 'hasUrls' => $public, 'url' => $public ? "https://mailer.test/$handle" : null],
        ]);
        $this->assertTrue($fsService->saveFilesystem($fs), json_encode($fs->getErrors()));

        $volume = new Volume(['name' => $handle, 'handle' => $handle, 'fsHandle' => $handle]);
        $this->assertTrue(Craft::$app->getVolumes()->saveVolume($volume), json_encode($volume->getErrors()));

        $image = imagecreatetruecolor(800, 400);
        $tmp = sys_get_temp_dir() . "/photo-$handle.png";
        imagepng($image, $tmp);

        $asset = new Asset();
        $asset->tempFilePath = $tmp;
        $asset->filename = "photo-$handle.png";
        $asset->volumeId = $volume->id;
        $asset->newFolderId = Craft::$app->getAssets()->getRootFolderByVolumeId($volume->id)->id;
        $asset->setScenario(Asset::SCENARIO_CREATE);
        $this->assertTrue(Craft::$app->getElements()->saveElement($asset), json_encode($asset->getErrors()));

        return $asset;
    }
}
