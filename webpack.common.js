var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


const PATHS = {
    index: path.join(__dirname, 'index.html'),
    src: path.join(__dirname, 'src'),
    img: path.join(__dirname, 'src/images'),
    static: path.join(__dirname, 'src/static'),
    js: path.join(__dirname, 'src/javascripts'),
    styles: path.join(__dirname, 'src/stylesheets'),
    node_modules: path.join(__dirname, 'node_modules'),
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
        test: /\.(css|sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
        include: [
          PATHS.styles,
          PATHS.node_modules
        ]
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
