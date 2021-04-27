const merge = require('webpack-merge');
const common = require('./webpack-app.common.js');
const paths = require('./paths');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = () => {
  return merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: false,
    },
    module: {
      rules: [],
    },
    plugins: [
      new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
        root: process.cwd(),
        verbose: true,
        dry: false,
      }),
      new OptimizeCssAssetsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css',
        chunkFilename: '[id].[hash:8].css',
      }),
      new TerserPlugin(),
      new ManifestPlugin(),
      new CompressionPlugin(),
    ],
  });
};
