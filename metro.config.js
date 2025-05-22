const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  "react-dom": path.resolve(__dirname, "emptyShim.js"),
};

module.exports = config;
