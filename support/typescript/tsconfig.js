const json5 = require("json5");
const { readFileSync } = require("fs");
const { resolve } = require("path");

const tsConfigFile = resolve(__dirname, "../../tsconfig.json");

const tsconfig = json5.parse(readFileSync(tsConfigFile));

exports.tsConfigFile = tsConfigFile;

module.exports = tsconfig;
