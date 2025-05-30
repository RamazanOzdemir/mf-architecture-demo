const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const deps = require("./package.json").dependencies;
const path = require("path");
require("dotenv").config();

const shared = {};
for (const key in deps) {
  shared[key] = {
    singleton: true,
    requiredVersion: deps[key],
  };
}

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "404.html", // 👈 fallback dosyası
      template: "./public/index.html", // aynı içerik
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "shell",
      shared,
    }),
    new webpack.DefinePlugin({
      "process.env.DASHBOARD_FRAGMENT_URL": JSON.stringify(
        process.env.DASHBOARD_FRAGMENT_URL
      ),
      "process.env.USERS_FRAGMENT_URL": JSON.stringify(
        process.env.USERS_FRAGMENT_URL
      ),
      "process.env.PRODUCTS_FRAGMENT_URL": JSON.stringify(
        process.env.PRODUCTS_FRAGMENT_URL
      ),
    }),
  ],
};
