const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  // ...
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  // ...
};
