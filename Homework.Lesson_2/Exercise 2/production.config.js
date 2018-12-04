const path = require('path');

module.exports = {
	entry: './src/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	mode: 'production',
	module: {
		rules: 
		[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				"exclude": '/node_modules/'
			}
		]
	}
}