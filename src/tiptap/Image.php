<?php
/**
 * @copyright Copyright (c) Rareform
 */

namespace rareform\mailer\tiptap;

use Tiptap\Nodes\Image as BaseImage;

/**
 * Image node rendered for email: keeps the source asset ID and uses width-only, fluid sizing.
 */
class Image extends BaseImage
{
    /**
     * @inheritdoc
     */
    public function addAttributes()
    {
        return [
            'src' => [],
            'alt' => [],
            'title' => [],
            'width' => [
                'renderHTML' => fn($attributes) => !empty($attributes->width) ? ['width' => (int)round((float)$attributes->width)] : null,
            ],
            // Height is left to the browser so images scale proportionally
            'height' => [
                'renderHTML' => fn() => null,
            ],
            'assetId' => [
                'parseHTML' => fn($DOMNode) => $DOMNode->getAttribute('data-asset-id') ?: null,
                'renderHTML' => fn($attributes) => !empty($attributes->assetId) ? ['data-asset-id' => (int)$attributes->assetId] : null,
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function renderHTML($node, $HTMLAttributes = [])
    {
        $HTMLAttributes['style'] = 'display: block; max-width: 100%; height: auto; border: 0;';

        return ['img', $HTMLAttributes, 0];
    }
}
