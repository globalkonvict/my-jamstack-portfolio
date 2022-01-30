/**
 * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/
 */

const configSharp = {
  resolve: `gatsby-plugin-sharp`,
  options: {
    defaults: {
      formats: [`auto`, `avif`, `webp`, 'png', 'jpeg'],
      placeholder: `dominantColor`,
      quality: 50,
      breakpoints: [320, 750, 1080, 1366, 1920],
      backgroundColor: `transparent`,
    },
  },
};

export default configSharp;
