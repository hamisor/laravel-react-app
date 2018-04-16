let mix = require('laravel-mix');

// LARAVEL-MIX DOES NOT HAVE CLEAN UP API, THIS IS A PLUGIN FOR WEB-PACK TO CLEAN UP ANY PREVIOUS COMPILED FILES
// THIS PLUGIN IS INTEGRATED INTO LARAVEL-MIX WITH webpackConfig() API WHICH ADDS CUSTOM WEBPACK CONFIGURATION
// https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
let CleanWebpackPlugin = require('clean-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
// CLEAN UP PROCEDURE
    .webpackConfig({
        plugins: [
            new CleanWebpackPlugin(['public/js', 'public/css'])
        ]
    })
    // JS COMPILATION
    .react('resources/assets/js/appHarness.js', 'public/js')
    // SASS COMPILATION
    .sass('resources/assets/sass/appHarness.scss', 'public/css');
