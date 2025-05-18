const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    filename: "[name].bundle.js",
    publicPath: "auto",
  },
  devServer: {
    static: path.resolve(__dirname, "../dist"),
    port: process.env.PORT,
    historyApiFallback: true,
    hot: true,
  },
});
