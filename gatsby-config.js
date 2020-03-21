const { resolve } = require("path");
const tsconfig = require("./support/typescript/tsconfig");

/**
 * Use the paths property from the tsconfig.json file instead of having to keep
 * duplicating aliases
 */
const formatPaths = ({ baseUrl, paths }) =>
  Object.keys(paths).reduce(
    (acc, key) => {
      const value = paths[key][0].replace("/*", "");
      const cleanKey = key.replace("/*", "");

      return {
        ...acc,
        [cleanKey]: resolve(baseUrl, value),
      };
    },
    { root: resolve(__dirname, baseUrl) },
  );

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "singularity-template",
    description: "",
    release: {
      commit: process.env.COMMIT_SHA || "",
      version: process.env.RELEASE_VERSION || "",
      channel: process.env.DEPLOYMENT_CHANNEL || "",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: formatPaths(tsconfig.compilerOptions),
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-lodash",
    "gatsby-plugin-ts",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId:
          process.env.GOOGLE_ANALYTICS_TRACKING_ID || "UA-XXXXXXXXX-X",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        name: "singularity-template",
        short_name: "singularity-template",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "RickAndMorty",
        fieldName: "rickAndMorty",
        url: "https://rickandmortyapi.com/graphql",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-webpack-size",
  ],
};
