/**
 * @name Netlify CMS configuration
 * @description refer the documentation
 * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify-cms/
 */

const netlifyCMS = {
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    modulePath: `${__dirname}/src/cms/cms.js`,
  },
};

export default netlifyCMS;
