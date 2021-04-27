const paths = require('./paths');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: paths.appEntryPath // add more paths to split bundle
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: paths.appOutputPath,
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options : {
          configFile : "../tsconfig.json"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000"
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: paths.templatePath
    })
  ]
}