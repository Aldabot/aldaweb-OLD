const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist')
const SRC_DIR = path.resolve(__dirname, 'src')
const JS_DIR = SRC_DIR + '/javascripts'
const SCSS_DIR = SRC_DIR + '/stylesheets'

module.exports = {
  entry: [JS_DIR+'/index.js', SCSS_DIR+'/app.scss'],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include : SRC_DIR + '/javascripts',
        loader : 'babel-loader'
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].bundle.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Aldabot',
      template: 'index.html'
    })
  ],
}
