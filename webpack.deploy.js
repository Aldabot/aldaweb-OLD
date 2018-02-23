var dotenv = require('dotenv');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var S3Plugin = require('webpack-s3-plugin');
dotenv.config();

const PATHS = {
    index: path.join(__dirname, 'index.html'),
    src: path.join(__dirname, 'src'),
    img: path.join(__dirname, 'src/images'),
    static: path.join(__dirname, 'src/static'),
    js: path.join(__dirname, 'src/javascripts'),
    styles: path.join(__dirname, 'src/stylesheets'),
    node_modules: path.join(__dirname, 'node_modules'),
    build: path.join(__dirname, 'build')
};


module.exports = {
    context: PATHS.src,
    entry: ['babel-polyfill', './javascripts/index.jsx', './stylesheets/app.scss'],
    output: {
        filename: 'bundle.js',
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
    node: {
        fs: 'empty'
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
            allChunks: true
        }),
        new S3Plugin({
            s3Options: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: 'eu-west-1'
            },
            s3UploadOptions: {
                Bucket: 'aldabot.es'
            }
        })
    ]
};
