/**
 * @name Netlify CMS configuration
 * @description refer the documentation
 * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify-cms/
 */

const netlifyCMS = ({ dir }) => ({
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    modulePath: `${dir}/src/cms/cms.js`,
  },
});

module.exports = netlifyCMS;
