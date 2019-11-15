const path = require('path')
const webpack = require('webpack')

new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
  }
}