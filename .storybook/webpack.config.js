const merge = require("webpack-merge");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { tsConfigFile } = require("../support/typescript/tsconfig");

module.exports = async ({ config }) =>
  merge(config, {
    resolve: {
      plugins: [new TsconfigPathsPlugin({ configFile: tsConfigFile })],
    },
  });
