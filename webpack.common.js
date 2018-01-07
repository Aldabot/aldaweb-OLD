const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const PATHS = {
    index: path.join(__dirname, 'index.html'),
    src: path.join(__dirname, 'src'),
    img: path.join(__dirname, 'src/images'),
    static: path.join(__dirname, 'src/static'),
    js: path.join(__dirname, 'src/javascripts'),
    styles: path.join(__dirname, 'src/stylesheets'),
    build: path.join(__dirname, 'build')
}

module.exports = {
  context: PATHS.src,
  entry: ['./javascripts/index.js', './stylesheets/app.scss'],
  output: {
    filename: '[name].js',
    path: PATHS.build
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include : PATHS.src + '/javascripts',
        loader : 'babel-loader'
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
        include: PATHS.styles
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader',
        include: PATHS.img
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([
      {
        from: PATHS.index,
        to: 'index.html'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: PATHS.img,
        to: 'images'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: PATHS.static,
        to: 'static'
      }
    ]),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'stylesheets/[name].css',
      allChunks: true,
    })
  ],
}
