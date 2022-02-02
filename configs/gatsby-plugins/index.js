const alias = require('./plugins/alias');
const netlifyCMS = require('./plugins/cms');
const filesystem = require('./plugins/filesystem');
const netlifyPlugin = require('./plugins/netlify');
const nprogress = require('./plugins/nprogress');
const purgeCssConfig = require('./plugins/purge-css');
const remarkConfig = require('./plugins/remark');
const sass = require('./plugins/sass');
const sharp = require('./plugins/sharp');

/**
 * @description Adds all gatsby plugin by importing them, for plugins with no options are used directly as name string.
 * @tutorial Add all plugins here by importing them from the `./plugin` directory. If adding new plugin first create the plugin object separately in plugins directory and then import and add it to array
 */

const plugins = [
  'gatsby-plugin-react-helmet',
  `gatsby-remark-smartypants`,
  `gatsby-plugin-catch-links`,
  'gatsby-transformer-sharp',
  `gatsby-plugin-image`,
  `gatsby-plugin-preload-fonts`,
  sass,
  alias,
  nprogress,
  filesystem,
  sharp,
  remarkConfig,
  netlifyCMS,
  // purgeCssConfig,
  netlifyPlugin,
];

/**
 * @description Processes and returns plugins in gatsby supported format
 * @param {{dir: string}}  Object with the correct {dir: __dirname} name
 * @returns
 */
const patchPlugins = ({ dir }) => plugins.map(plugin => (typeof plugin === 'function' ? plugin({ dir }) : plugin)).flat();

module.exports = patchPlugins;
