var path = require('path')

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
      test: /\.js/,
      include: path.join(__dirname, 'src'),
      loader: 'babel'
    }]
  }
}
