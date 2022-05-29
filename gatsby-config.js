const plugins = require(`${__dirname}/configs/gatsby-plugins/`)({ dir: __dirname })
const siteMetadata = require(`${__dirname}/configs/gatsby-config/siteMetadata`)
const flags = require(`${__dirname}/configs/gatsby-config/flags.js`)

// Make available all the environment variables in the process.env object
require('dotenv').config()

/**
 * @description This exports all your gatsby configuration
 * @summary It has been modularized. Since a large gatsby plugin array makes it hard to work with when there are many plugins
 * @param {Object} param0 Gatsby config object
 * @returns {Object} Gatsby config object
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#plugins
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#sitemetadata
 */

module.exports = {
  siteMetadata,
  flags,
  plugins,
  jsxRuntime: 'automatic'
}
