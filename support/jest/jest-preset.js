const { defaults: tsjPreset } = require("ts-jest/presets");
const { compilerOptions } = require("../typescript/tsconfig");
const { pathsToModuleNameMapper } = require("ts-jest/utils");

module.exports = {
  transform: {
    ...tsjPreset.transform,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/support/jest/file-mock.js",
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/src/",
    }),
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
    "ts-jest": {
      compiler: "typescript",
      tsConfig: {
        ...compilerOptions,
        jsx: "react",
      },
    },
  },
  setupFiles: ["<rootDir>/support/jest/loadershim.js"],
  setupFilesAfterEnv: ["<rootDir>/support/jest/jest-setup.ts"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/.coverage",
  collectCoverageFrom: ["src/**/*.tsx", "src/**/*.ts", "!public"],
  coveragePathIgnorePatterns: ["stories\\.tsx?", "index\\.ts$"],
};
