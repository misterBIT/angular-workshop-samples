const path = require('path');
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, '../'),
	plugins: [
		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			path.resolve(__dirname, '.../src') // location of your src
		),
		new CopyWebpackPlugin([{from: 'public/', to: '.'}]),
	],
	module: {
		loaders: [
			// .ts files for TypeScript
			{test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']},
			{test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			{test: /\.scss$/, loaders: ["to-string-loader", "css", 'resolve-url', "sass"]},
			{test: /\.html$/, loader: 'raw-loader'}
		]
	},
	devtool: 'cheap-module-source-map',
	cache: true,
	debug: true,
	output: {
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map',
		chunkFilename: '[id].chunk.js'
	},

	resolve: {
		root: [path.join(__dirname, 'src')],
		extensions: ['', '.js', '.ts']
	},

	devServer: {
		historyApiFallback: true,
		watchOptions: {aggregateTimeout: 300, poll: 1000}
	},

	node: {
		global: 1,
		crypto: 'empty',
		module: 0,
		Buffer: 0,
		clearImmediate: 0,
		setImmediate: 0
	}
};
