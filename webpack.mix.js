let mix = require('laravel-mix');

mix.options({
    processCssUrls: false,
});

mix.js('src/app.js', 'dist')
    .sass('src/app.scss', 'dist')
    .setPublicPath('dist')
    .version();