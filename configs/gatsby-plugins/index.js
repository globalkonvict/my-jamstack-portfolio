const netlifyCMS = require('./plugins/cms')
const filesystem = require('./plugins/filesystem')
const alias = require('./plugins/alias')
const netlifyPlugin = require('./plugins/netlify')
const nprogress = require('./plugins/nprogress')
const purgeCssConfig = require('./plugins/purge-css')
const remarkConfig = require('./plugins/remark')
const sass = require('./plugins/sass')
const sharp = require('./plugins/sharp')
const gAnalytics = require('./plugins/analytics')
const tagManager = require('./plugins/tag-manager')
const disqusComments = require('./plugins/gatsby-plugin-disqus')
const sitemaps = require('./plugins/gatsby-plugin-sitemap')

/**
 * @description Adds all gatsby plugin by importing them, for plugins with no options are used directly as name string.
 * @tutorial Add all plugins here by importing them from the `./plugin` directory. If adding new plugin first create the plugin object separately in plugins directory and then import and add it to array
 */

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-remark-smartypants',
  'gatsby-plugin-catch-links',
  'gatsby-transformer-sharp',
  'gatsby-plugin-image',
  'gatsby-plugin-preload-fonts',
  'gatsby-plugin-optimize-svgs',
  'gatsby-plugin-brotli',
  sass,
  alias,
  nprogress,
  filesystem,
  sharp,
  gAnalytics,
  tagManager,
  remarkConfig,
  netlifyCMS,
  purgeCssConfig,
  netlifyPlugin,
  disqusComments,
  sitemaps
]

/** @description Helpers to shorten plugins array construction */
// This maps plugins to correctly identifying that plugin is object or string.
const pluginsMapper = (plugin, dir) => (typeof plugin === 'function' ? plugin({ dir }) : plugin)
// This only keeps allowed  plugins
const disablePluginsModifier = disablePlugins => plugin => !disablePlugins.includes(typeof plugin === 'Object' ? plugin.resolve : plugin)

/**
 * @description Processes and returns plugins in gatsby supported format, often config less plugins are of string type while
 * @param {{dir: string, disablePlugins: [String]}}
 *  @description {{dir: string}} - path to the directory where the gatsby config is located
 *  @description {{disablePlugins: [String]}} - plugins to disable by their name.
 * @returns [String && Object] - array of plugins can be strings or objects containing plugin name and options.
 */
const patchPlugins = ({ dir, disablePlugins = [] }) =>
  plugins
    .map(plugin => pluginsMapper(plugin, dir))
    .flat(Infinity)
    .filter(disablePluginsModifier(disablePlugins))

module.exports = patchPlugins
