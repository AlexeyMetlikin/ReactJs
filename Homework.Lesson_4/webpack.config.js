const path = require('path');

module.exports = {
	entry: './src/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	mode: 'development',
	module: {
		rules:
		[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['image-webpack-loader', 'file-loader']
      }
		]
	},
	resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
	}
}
