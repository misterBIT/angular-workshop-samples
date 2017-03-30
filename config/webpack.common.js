const path = require('path');
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, '../'),
	plugins: [
		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)@angular/,
			path.resolve(__dirname, '.../src') // location of your src
		),
		new CopyWebpackPlugin([{from: 'src/data/', to: '.'}]),
	],
	module: {
		loaders: [
			// .ts files for TypeScript
			{test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader','angular2-router-loader']},
			{test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
			{test: /\.scss$/, loaders: ["to-string-loader", "css-loader", 'resolve-url-loader', "sass-loader"]},
			{test: /\.html$/, loader: 'raw-loader'}
		]
	},
	devtool: 'cheap-module-source-map',
	cache: true,
	output: {
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map',
		chunkFilename: '[id].chunk.js'
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	devServer: {
		historyApiFallback: true,
		watchOptions: {aggregateTimeout: 300, poll: 1000}
	},

	node: {
		global: true,
		crypto: 'empty',
		module: false,
		Buffer: false,
		clearImmediate: false,
		setImmediate: false
	}
};
