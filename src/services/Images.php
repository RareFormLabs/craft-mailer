<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\services;

use Craft;
use craft\elements\Asset;
use rareform\mailer\models\ComposeForm;
use yii\base\Component;

/**
 * Handles images placed in the message body.
 *
 * Images are either linked (the `src` points to the asset’s public URL) or embedded in each email as an inline
 * attachment (`cid:` references).
 */
class Images extends Component
{
    /**
     * The width images are limited to when they haven’t been resized in the editor, in pixels.
     */
    public const DEFAULT_MAX_WIDTH = 600;

    /**
     * @var array<int, Asset|null>
     */
    private array $_assets = [];

    /**
     * Returns the IDs of the assets used as images in TipTap content.
     *
     * @return int[]
     */
    public function getAssetIds(array $content): array
    {
        $ids = [];

        $this->walk($content, function(array $node) use (&$ids) {
            if (($node['type'] ?? null) === 'image' && !empty($node['attrs']['assetId'])) {
                $ids[] = (int)$node['attrs']['assetId'];
            }
        });

        return array_values(array_unique($ids));
    }

    /**
     * Validates the images in a compose form’s body, adding errors to it.
     */
    public function validate(ComposeForm $form): bool
    {
        $content = $form->getBodyContent();
        $errors = [];

        $this->walk($content, function(array $node) use (&$errors) {
            if (($node['type'] ?? null) === 'image' && empty($node['attrs']['assetId'])) {
                $src = (string)($node['attrs']['src'] ?? '');

                if (!preg_match('/^https?:\/\//i', $src)) {
                    $errors[] = Craft::t('mailer', 'Images must be chosen from your assets or use a full https:// URL.');
                }
            }
        });

        foreach ($this->getAssetIds($content) as $assetId) {
            $asset = $this->getAsset($assetId);

            if (!$asset) {
                $errors[] = Craft::t('mailer', 'An image in the message no longer exists. Remove it and add it again.');
            } elseif (!$form->embedImages && !$this->getPublicUrl($asset)) {
                $errors[] = Craft::t('mailer', '“{filename}” isn’t publicly accessible. Turn on “Embed images”, or use an image from a volume with public URLs.', [
                    'filename' => $asset->getFilename(),
                ]);
            }
        }

        foreach (array_unique($errors) as $error) {
            $form->addError('bodyJson', $error);
        }

        return !$errors;
    }

    /**
     * Returns the combined file size of the images that would be embedded.
     */
    public function getEmbeddedSize(ComposeForm $form): int
    {
        if (!$form->embedImages) {
            return 0;
        }

        $size = 0;

        foreach ($this->getAssetIds($form->getBodyContent()) as $assetId) {
            $size += (int)($this->getAsset($assetId)->size ?? 0);
        }

        return $size;
    }

    /**
     * Rewrites the images in rendered HTML for sending.
     *
     * @param string $html HTML rendered from TipTap content
     * @param array<int, string>|null $cids Content IDs indexed by asset ID, when embedding images; `null` to link them
     */
    public function prepareForEmail(string $html, ?array $cids): string
    {
        $html = $this->rewrite($html, function(Asset $asset) use ($cids) {
            return $cids !== null ? (isset($cids[$asset->id]) ? 'cid:' . $cids[$asset->id] : null) : $this->getPublicUrl($asset);
        });

        // Every image gets alt text (empty if there’s none), so email clients don’t show the file name instead
        return preg_replace('/<img\b(?![^>]*\salt=)/i', '<img alt=""', $html) ?? $html;
    }

    /**
     * Rewrites the images in rendered HTML so they display in the control panel (editor, preview and logs).
     *
     * @param string $html
     * @param array<string, int> $cidAssetIds Asset IDs indexed by content ID, for HTML that references embedded images
     */
    public function prepareForDisplay(string $html, array $cidAssetIds = []): string
    {
        if ($cidAssetIds) {
            $html = preg_replace_callback('/(<img\b[^>]*\bsrc=")cid:([^"]+)(")/i', function(array $match) use ($cidAssetIds) {
                $assetId = $cidAssetIds[html_entity_decode($match[2], ENT_QUOTES | ENT_HTML5)] ?? null;
                $asset = $assetId ? $this->getAsset($assetId) : null;

                return $asset ? $match[1] . htmlspecialchars($this->getDisplayUrl($asset), ENT_QUOTES) . $match[3] : $match[0];
            }, $html) ?? $html;
        }

        return $this->rewrite($html, fn(Asset $asset) => $this->getDisplayUrl($asset), false);
    }

    /**
     * Returns the details needed to insert an asset into the editor.
     *
     * @return array{assetId: int, src: string, alt: string, width: int|null, filename: string, hasUrl: bool}
     */
    public function getEditorData(Asset $asset): array
    {
        $width = $asset->getWidth();

        return [
            'assetId' => (int)$asset->id,
            'src' => $this->getDisplayUrl($asset),
            'alt' => (string)($asset->alt ?? ''),
            'width' => $width ? min((int)$width, self::DEFAULT_MAX_WIDTH) : null,
            'filename' => $asset->getFilename(),
            'hasUrl' => $this->getPublicUrl($asset) !== null,
        ];
    }

    /**
     * Returns an asset by ID, memoized.
     */
    public function getAsset(int $assetId): ?Asset
    {
        if (!array_key_exists($assetId, $this->_assets)) {
            $this->_assets[$assetId] = Asset::find()->id($assetId)->status(null)->one();
        }

        return $this->_assets[$assetId];
    }

    /**
     * Returns an asset’s absolute public URL, or `null` if its volume doesn’t have public URLs.
     */
    public function getPublicUrl(Asset $asset): ?string
    {
        $url = $asset->getUrl();

        if (!$url) {
            return null;
        }

        if (str_starts_with($url, '//')) {
            return 'https:' . $url;
        }

        if (preg_match('/^https?:\/\//i', $url)) {
            return $url;
        }

        // Root-relative URLs (e.g. `@web/uploads` resolved outside a web request) are made absolute
        // with the primary site’s URL, since email clients need a full URL.
        if (str_starts_with($url, '/')) {
            $base = Craft::$app->getSites()->getPrimarySite()->getBaseUrl();
            $parts = $base ? parse_url($base) : false;

            if (!empty($parts['scheme']) && !empty($parts['host'])) {
                return sprintf('%s://%s%s%s', $parts['scheme'], $parts['host'], isset($parts['port']) ? ':' . $parts['port'] : '', $url);
            }
        }

        return null;
    }

    /**
     * Returns a URL that displays the asset in the control panel.
     */
    public function getDisplayUrl(Asset $asset): string
    {
        return $this->getPublicUrl($asset) ?? (string)Craft::$app->getAssets()->getThumbUrl($asset, 1200, 1200, false);
    }

    /**
     * Rewrites the `src` of every `<img data-asset-id>` tag.
     *
     * @param callable(Asset): (string|null) $src Returns the new `src`, or `null` to remove the image
     * @param bool $forEmail Whether to strip the asset ID and set a default width
     */
    private function rewrite(string $html, callable $src, bool $forEmail = true): string
    {
        if (!str_contains($html, 'data-asset-id')) {
            return $html;
        }

        return preg_replace_callback('/<img\b[^>]*>/i', function(array $match) use ($src, $forEmail) {
            $tag = $match[0];

            if (!preg_match('/\sdata-asset-id="(\d+)"/', $tag, $idMatch)) {
                return $tag;
            }

            $asset = $this->getAsset((int)$idMatch[1]);
            $url = $asset ? $src($asset) : null;

            if ($url === null) {
                return '';
            }

            $tag = preg_replace('/\ssrc="[^"]*"/', ' src="' . htmlspecialchars($url, ENT_QUOTES) . '"', $tag, 1) ?? $tag;

            if ($forEmail) {
                $tag = str_replace($idMatch[0], '', $tag);

                if (!preg_match('/\swidth="/', $tag) && $asset->getWidth()) {
                    $tag = preg_replace('/^<img\b/i', '<img width="' . min((int)$asset->getWidth(), self::DEFAULT_MAX_WIDTH) . '"', $tag, 1) ?? $tag;
                }
            }

            return $tag;
        }, $html) ?? $html;
    }

    private function walk(array $nodes, callable $callback): void
    {
        foreach ($nodes as $node) {
            if (!is_array($node)) {
                continue;
            }

            $callback($node);

            if (isset($node['content']) && is_array($node['content'])) {
                $this->walk($node['content'], $callback);
            }
        }
    }
}
