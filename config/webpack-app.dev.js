const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack-app.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyser = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = () => {
  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 3042,
      historyApiFallback: true,
      overlay: true,
      open: true,
      stats: 'errors-only',
      host: 'localhost',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new BundleAnalyser(),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
  });
};
