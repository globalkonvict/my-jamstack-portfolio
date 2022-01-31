/**
 * @description PurgeCSS to remove unused CSS
 * @name PurgeCSS Gatsby Plugin
 * @link https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/
 * @link https://purgecss.com/configuration.html#options
 */

const purgeCssConfig = {
  resolve: `gatsby-plugin-purgecss`,
  options: {
    develop: true,
    printRejected: true,
    ignore: [],
    purgeCSSOptions: {},
  },
};

module.exports = purgeCssConfig;
