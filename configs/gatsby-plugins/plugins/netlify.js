/**
 * @name Gatsby Plugin Netlify
 * @description This plugin adds support for Gatsby SSR and DSG on Netlify, and handles Gatsby redirects and headers.
 * @link https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
 */
const netlifyConfig = {
  resolve: 'gatsby-plugin-netlify',
  options: {
    headers: {},
    allPageHeaders: [],
    mergeSecurityHeaders: true,
    mergeLinkHeaders: true,
    mergeCachingHeaders: true
  }
}

module.exports = netlifyConfig
