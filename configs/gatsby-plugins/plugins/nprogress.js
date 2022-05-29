/**
 * @description Automatically shows the accessible-nprogress indicator when a page is delayed in loading.
 * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-nprogress
 */
const nprogress = {
  resolve: 'gatsby-plugin-nprogress',
  options: {
    color: 'tomato',
    showSpinner: true
  }
}

module.exports = nprogress
