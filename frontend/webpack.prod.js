const commonPaths = require("./build-utils/common-paths");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		app: `${commonPaths.appEntry}/index.js`
	},
	output: {
		filename: "js/[name].[hash].js",
		publicPath: "/",
		path: commonPaths.outputPath
	},
	resolve: {
		modules: [commonPaths.appEntry, "node_modules"]
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.(scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							modules: {
								localIdentName: "[hash:base64:5]"
							}
						}
					},
					{
						loader: "postcss-loader"
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
							sassOptions: {
								includePaths: [`${commonPaths.appEntry}/styles`]
							}
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|jpg|gif|svg|mp4)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "static/images/[name].[ext]"
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "static/fonts/[name].[ext]"
						}
					}
				]
			}
		]
	},
	optimization: {},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			favicon: "public/favicon.ico",
			hash: true,
			cache: true
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[hash].css"
		})
	]
};
