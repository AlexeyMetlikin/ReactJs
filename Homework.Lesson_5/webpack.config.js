const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/app.js',
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
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: {baseDir: ['dist']}
		})
	],
	resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
	}
}
