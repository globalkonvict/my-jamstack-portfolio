const siteMetadata = require(`${__dirname}/configs/siteMetadata`);
const flags = require(`${__dirname}/configs/flags`);
const plugins = require(`${__dirname}/configs/gatsby-plugins/`)({ dir: __dirname });

/**
 * @description This exports all your gatsby configuration
 * @summary It has been modularized. Since a large gatsby plugin array makes it hard to work with when there are many plugins
 */
module.exports = {
  siteMetadata,
  flags,
  plugins,
  jsxRuntime: 'automatic',
};
