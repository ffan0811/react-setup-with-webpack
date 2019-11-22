const commonPaths = require('./build-utils/common-paths');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: `${commonPaths.appEntry}/index.js`
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: commonPaths.outputPath,
    },
    resolve: {
        modules: [
            commonPaths.appEntry,
            "node_modules"
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css||scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'cheap-module-eavl-source-map',
    devServer: {
        port: 8081,
        historyApiFallback: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.[hash].css'
        })
    ]
};