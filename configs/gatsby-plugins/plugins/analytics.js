/**
 * @description Implement the gatsby-plugin-google-analytics
 * @summary This plugin is used to add Google Analytics to your site
 * @param {Object} param0 Gatsby config object
 * @returns {Object} Gatsby config object
 * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/
 */

module.exports = {
  resolve: 'gatsby-plugin-google-analytics',
  options: {
    trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
    head: false,
    anonymize: true,
    respectDNT: true,
    exclude: [],
    pageTransitionDelay: 0,
    defer: false,
    siteSpeedSampleRate: 10,
    enableWebVitalsTracking: true
  }
}
