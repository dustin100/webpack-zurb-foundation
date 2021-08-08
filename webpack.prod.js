const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	entry: {
		main: './src/index.js',
		fdn: './src/fdn.js',
	},
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: './imgs/[name].[hash].[ext]',
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
});
