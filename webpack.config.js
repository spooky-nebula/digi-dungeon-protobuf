const path = require('path');

module.exports = {
  entry: { index: './src/index.ts', test: './src/test.ts' },
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.proto$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: path.resolve(__dirname, 'dist/') + '/',
    assetModuleFilename: 'proto/[base]'
  }
};
