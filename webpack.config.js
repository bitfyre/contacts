var path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: 'app.min.js'
  },
  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    alias: {
      jquery: path.join(__dirname, 'node_modules/jquery/dist/jquery.js')
    }
  }
}
