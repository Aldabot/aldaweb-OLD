var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

const PATHS = {
    app: path.join(__dirname),
    index: path.join(__dirname, 'client/index.html'),
    img: path.join(__dirname, 'client/images'),
    static: path.join(__dirname, 'client/static'),
    js: path.join(__dirname, 'client/javascripts'),
    styles: path.join(__dirname, 'client/stylesheets'),
    node_modules: path.join(__dirname, 'node_modules'),
    build: path.join(__dirname, 'build'),
    server: path.join(__dirname, 'server')
};

const common = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
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
}

const frontend = {
    entry: {
        "bundle.js" : ['babel-polyfill', PATHS.js+'/index.jsx'],
        "style" : PATHS.styles+'/app.scss'
    },
    output: {
        path: PATHS.build,
        filename: "[name]"
    },
    devtool: 'source-map',
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
        })
    ]
};

const backend = {
    entry: {
        "server/bundle.js": PATHS.server+'/index.js'
    },
    output: {
        path: PATHS.build,
        filename: "[name]"
    },
    target: 'node',
    externals: [nodeExternals()]
};

module.exports = [
    Object.assign({}, common, frontend),
    Object.assign({}, common, backend)
];
