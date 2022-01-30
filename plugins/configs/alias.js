/**
 * @name gatsby-plugin-alias-imports
 * @description use alias to import files
 * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-alias-imports/
 */
const alias = {
  resolve: `gatsby-plugin-alias-imports`,
  options: {
    alias: {
      '@src': 'src',
      '@components': 'src/components',
      '@layout': 'src/components/Layout',
      '@pages': 'src/pages',
      '@styles': 'src/styles',
      '@templates': 'src/templates',
      '@utils': 'src/utils',
    },
    extensions: ['js', 'jsx', 'sass', 'css'],
  },
};

module.exports = alias;
