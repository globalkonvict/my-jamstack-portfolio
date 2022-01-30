import sass from './configs/sass';
import alias from './configs/alias';
import sharp from './configs/sharp';
import netlifyCMS from './configs/cms';
import remarkConfig from './configs/remark';
import nprogress from './configs/nprogress';
import netlifyPlugin from './configs/netlify';
import filesystem from './configs/filesystem';
import purgeCssConfig from './configs/purge-css';
import _ from 'lodash';

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
  purgeCssConfig,
  netlifyPlugin,
];

const allPlugins = _.flattenDeep(plugins);
console.log(allPlugins);

export default allPlugins;
