const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		clean: true,
		publicPath: '/',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		static: path.resolve(__dirname, './public'),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		modules: [path.resolve(__dirname, './src'), 'node_modules'],
		extensions: ['.jsx', '.js', '.css', '.json'],
		alias: {
			assets: path.resolve(__dirname, './public'),
		},
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'main.css',
		}),
		new HTMLWebpackPlugin({
			title: 'Home-build',
			favicon: path.resolve(__dirname, './public/images/favicon.jpg'),
			template: path.resolve(__dirname, './public/template.html'),
			filename: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './dist'),
					to: 'assets',
					globOptions: {
						ignore: ['*.DS_Store'],
					},
					noErrorOnMissing: true,
				},
			],
		}),
	],
};
