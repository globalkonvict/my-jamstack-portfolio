/**
 * @description refer the documentation
 * @name gatsby-transformer-remark
 * @link https://www.gatsbyjs.com/plugins/gatsby-transformer-remark
 * @name gatsby-remark-relative-images
 * @link https://www.gatsbyjs.com/plugins/gatsby-remark-relative-images
 * @name gatsby-remark-images
 * @link https://www.gatsbyjs.com/plugins/gatsby-remark-images
 * @name gatsby-remark-copy-linked-files
 * @link https://www.gatsbyjs.com/plugins/gatsby-remark-copy-linked-files
 * @name gatsby-plugin-sharp
 * @link https://www.gatsbyjs.com/plugins/gatsby-remark-vscode
 */

const remarkConfig = {
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-relative-images',
        options: {
          name: 'uploads'
        }
      },
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 2040
        }
      },
      {
        resolve: 'gatsby-remark-copy-linked-files',
        options: {
          destinationDir: 'static'
        }
      },
      {
        resolve: 'gatsby-remark-vscode',
        options: {
          theme: "SynthWave '84",
          extensions: ['synthwave-vscode']
        }
      }
    ]
  }
}

module.exports = remarkConfig
