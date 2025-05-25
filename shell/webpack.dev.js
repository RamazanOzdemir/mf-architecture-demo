const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    publicPath: "/",
  },
  devServer: {
    static: path.resolve(__dirname, "../dist"),
    port: process.env.PORT,
    historyApiFallback: true,
    open: true,
    hot: false,
  },
});
