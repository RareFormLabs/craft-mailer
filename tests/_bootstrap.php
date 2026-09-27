<?php
/**
 * Bootstraps Craft for the integration test suite.
 *
 * Craft is installed into the database defined by the CRAFT_DB_* environment variables (see tests/.env.example).
 * The suite cleans and reinstalls that database, so never point it at a real site’s database.
 */

use craft\test\TestSetup;

ini_set('date.timezone', 'UTC');

define('CRAFT_TESTS_PATH', __DIR__);
define('CRAFT_ROOT_PATH', dirname(__DIR__));
define('CRAFT_VENDOR_PATH', dirname(__DIR__) . '/vendor');
define('CRAFT_STORAGE_PATH', __DIR__ . '/_craft/storage');
define('CRAFT_TEMPLATES_PATH', __DIR__ . '/_craft/templates');
define('CRAFT_CONFIG_PATH', __DIR__ . '/_craft/config');
define('CRAFT_MIGRATIONS_PATH', __DIR__ . '/_craft/migrations');
define('CRAFT_TRANSLATIONS_PATH', __DIR__ . '/_craft/translations');

require_once CRAFT_VENDOR_PATH . '/autoload.php';

if (is_file(__DIR__ . '/.env')) {
    Dotenv\Dotenv::createUnsafeImmutable(__DIR__)->safeLoad();
}

TestSetup::configureCraft();
