const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const deps = require("./package.json").dependencies;
require("dotenv").config();

const path = require("path");

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
    new ForkTsCheckerWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "users",
      filename: "remoteEntry.js",
      library: { type: "global", name: "users" },

      exposes: {
        "./Main": "./src/app.tsx",
      },
      shared,
    }),
  ],
};
