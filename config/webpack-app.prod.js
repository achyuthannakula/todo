const { merge } = require('webpack-merge');
const common = require('./webpack-app.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { appOutputPath } = require('./paths.js');

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
      new CleanWebpackPlugin([appOutputPath], {
        root: process.cwd(),
        verbose: true,
        dry: false,
      }),
      new OptimizeCssAssetsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash:8].css',
        chunkFilename: '[id].[fullhash:8].css',
      }),
      new TerserPlugin(),
      new WebpackManifestPlugin(),
      new CompressionPlugin(),
    ],
  });
};
