const commonPaths = require('./build-utils/common-paths');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: `${commonPaths.appEntry}/index.js`
    },
    output: {
        filename: '[name].[hash].js',
        publicPath: '/',
        path: commonPaths.outputPath,
    },
    resolve: {
        modules: [
            commonPaths.appEntry,
            "node_modules"
        ]
    },
    devtool: 'inline-source-map',
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
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: '[path][name]__[local]', 
                            }
                        }
                    }, {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                includePaths: [
                                    `${commonPaths.appEntry}/styles`
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: `${commonPaths.port ? commonPaths.port : 8080}`,
        historyApiFallback: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.[hash].css'
        })
    ]
};