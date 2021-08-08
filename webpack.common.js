const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		main: './src/index.js',
		fdn: './src/fdn.js',
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
			inject: 'body',
		}),
	],

	module: {
		rules: [
			{
				test: /\.html$/i,
				use: ['html-loader'],
			},
		
		],
	},
};
