/**
 * @link https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=gatsby-source-filesystem
 */

const fileSystem = ({ dir }) => [
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${dir}/static/img`,
      name: 'uploads',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${dir}/src/pages`,
      name: 'pages',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${dir}/src/img`,
      name: 'images',
    },
  },
];

module.exports = fileSystem;
