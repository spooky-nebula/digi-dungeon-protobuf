const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  entry: { index: './src/index.ts' },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    clean: true,
    path: path.resolve(__dirname, 'dist/'),
    publicPath: path.resolve(__dirname, 'dist/') + '/',
    assetModuleFilename: 'proto/[base]'
  }
});
