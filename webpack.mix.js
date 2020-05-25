const mix = require('laravel-mix');
mix.browserSync({proxy: '127.0.01:8000'});
const ChunkRenamePlugin = require("webpack-chunk-rename-plugin");
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

if (process.env.COMP_TYPE === 'css') {
	mix.setPublicPath('public/css')
		.sass('resources/sass/app.scss', 'public/css');
} else{
	mix.js('resources/js/app.js', 'public/js')
		.copy('resources/assets/img', 'public/assets/img')
		.extract([
			'core-js/stable',
			'regenerator-runtime/runtime',
			'intersection-observer',
			'vue',
			'bootstrap-vue',
			'vuex',
			'vue-router',
			'axios'
		]);
}




let plugins = [
	new ChunkRenamePlugin({
		initialChunksWithEntry: true,
		'/js/app': 'js/app.js',
		'/js/vendor': 'js/vendor.js'
	}),
];

mix.webpackConfig({
	plugins: plugins,
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': __dirname + '/resources/js',
			moment$: 'moment/moment.js'
		},
	},
	output: {
		filename: (chunkData) => {
			return chunkData.chunk.name === '/manifest' ? 'manifest.js' : '[name].js?id=[chunkhash]';
		},
		chunkFilename: mix.inProduction() ? "js/split/[hash].js?id=[chunkhash]" : '[name].js',
	},


});

if (mix.inProduction()) {
	mix.sourceMaps()
		.version();
}
mix.disableNotifications();