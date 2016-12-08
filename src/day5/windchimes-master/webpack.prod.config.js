var autoprefixer = require('autoprefixer');
var path = require('path');


module.exports = {
  entry: ['./src/polyfills.ts', './src/prod.ts', './src/main.ts'],
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'babel?presets[]=es2015!ts'
      },
      {test: /\.css$/, loader: 'css-loader!postcss-loader'},
      {test: /\.svg$/, loader: "url-loader?limit=100000" }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  ts: {
    configFileName: 'tsconfig.prod.json'
  },
  output: {
    path: './dist/app',
    filename: 'bundle.js'
  },
  devtool: 'cheap-source-map'
};
