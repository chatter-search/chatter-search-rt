const webpack = require('webpack')

module.exports = {
	resolve: {
	    extensions: ['', '.js', '.jsx']
  	},
	entry: './src',
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: __dirname + '/src',
			loader: 'babel'
		}]
	}
}
