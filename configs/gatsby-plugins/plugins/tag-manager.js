/**
 * @description Implements the gatsby-plugin-tag-manager
 * @summary This plugin is used to add Google Tag Manager to your site
 * @param {Object} param0 Gatsby config object
 * @returns {Object} Gatsby config object
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/
 */

module.exports = {
  resolve: 'gatsby-plugin-google-tagmanager',
  options: {
    id: process.env.GOOGLE_TAG_MANAGER_ID,
    includeInDevelopment: false,
    defaultDataLayer: { platform: 'gatsby' },
    routeChangeEventName: 'gatsby-route-change',
    enableWebVitalsTracking: true,
  },
};
