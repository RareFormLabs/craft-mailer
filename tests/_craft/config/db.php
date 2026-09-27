<?php

use craft\helpers\App;

return [
    'dsn' => App::env('CRAFT_DB_DSN'),
    'user' => App::env('CRAFT_DB_USER'),
    'password' => App::env('CRAFT_DB_PASSWORD'),
    'tablePrefix' => App::env('CRAFT_DB_TABLE_PREFIX') ?: '',
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_0900_ai_ci',
];
