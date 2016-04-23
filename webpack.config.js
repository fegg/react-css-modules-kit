var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      /* use query param, can't use loaders, because many loader not support query config */
      query: {
        plugins: ['transform-decorators-legacy']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
    }]
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
    new ExtractTextPlugin("index.css", {
      allChunks: true
    })
  ]
}
