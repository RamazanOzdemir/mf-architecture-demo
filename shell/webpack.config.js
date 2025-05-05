const path = require("path");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [],
  },
};
