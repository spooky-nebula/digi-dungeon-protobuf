const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  entry: { index: './src/index.ts', 'test/test': './src/tests/index.test.ts' },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist-dev/'),
    publicPath: path.resolve(__dirname, 'dist-dev/') + '/',
    assetModuleFilename: 'proto/[base]'
  }
});
