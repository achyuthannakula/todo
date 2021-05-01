const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  appOutputPath: path.resolve(__dirname, "../", "docs"),
  appEntryPath: path.resolve(__dirname, "../", "src/index.tsx"),
  templatePath: path.resolve(__dirname, "../", "public/index.html"),
  imagesFolder: path.resolve(__dirname, "../", "public/assets"),
  nodeModulesPath: path.resolve(__dirname, "../", "node_modules"),
  tsconfig: path.resolve(__dirname, "../", "tsconfig.json"),
};
