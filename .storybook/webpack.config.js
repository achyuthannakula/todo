const paths = require("../config/paths");

module.exports = (baseConfig, env, defaultConfig) => {
  const rules = [
    {
      test: /\.tsx?$/,
      loader: "ts-loader",
      options : {
        configFile : paths.tsconfig
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
    { 
      test: /\.(yaml)$/, 
      loader: "raw-loader" 
    }
  ]
  defaultConfig.module.rules = rules;
  // defaultConfig.resolve.extensions = ['.ts', '.tsx', '.js'];

  return defaultConfig;
};