<?php

use craft\helpers\App;

return [
    'devMode' => true,
    'securityKey' => App::env('CRAFT_SECURITY_KEY') ?: 'mailer-test-security-key',
    'allowAdminChanges' => true,
];
