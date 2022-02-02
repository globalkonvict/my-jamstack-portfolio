const allFlags = [
  {
    name: `FAST_DEV`,
    env: `GATSBY_EXPERIMENTAL_FAST_DEV`,
    command: `develop`,
    telemetryId: `FastDev`,
    experimental: false,
    description: `Enable all experiments aimed at improving develop server start time.`,
    includedFlags: [
      // `DEV_SSR`, - not working with serverdata atm
      `PRESERVE_FILE_DOWNLOAD_CACHE`,
      `DEV_WEBPACK_CACHE`,
    ],
    testFitness: () => true,
  },
  {
    name: `DEV_SSR`,
    env: `GATSBY_EXPERIMENTAL_DEV_SSR`,
    command: `develop`,
    telemetryId: `DevSsr`,
    experimental: false,
    description: `Server Side Render (SSR) pages on full reloads during develop. Helps you detect SSR bugs and fix them without needing to do full builds. See umbrella issue for how to update custom webpack config.`,
    umbrellaIssue: `https://gatsby.dev/dev-ssr-feedback`,
    testFitness: () => {
      if (_CFLAGS_.GATSBY_MAJOR === `4`) {
        return false;
      }

      if (sampleSiteForExperiment(`DEV_SSR`, 20)) {
        return `OPT_IN`;
      } else {
        return true;
      }
    },
  },
  {
    name: `QUERY_ON_DEMAND`,
    env: `GATSBY_EXPERIMENTAL_QUERY_ON_DEMAND`,
    command: `develop`,
    telemetryId: false,
    experimental: false,
    description: `Only run queries when needed instead of running all queries upfront. Speeds starting the develop server.`,
    umbrellaIssue: `https://gatsby.dev/query-on-demand-feedback`,
    noCI: true,
    testFitness: () => `LOCKED_IN`,
  },
  {
    name: `LAZY_IMAGES`,
    env: `GATSBY_EXPERIMENTAL_LAZY_IMAGES`,
    command: `develop`,
    telemetryId: false,
    experimental: false,
    description: `Don't process images during development until they're requested from the browser. Speeds starting the develop server. Requires gatsby-plugin-sharp@2.10.0 or above.`,
    umbrellaIssue: `https://gatsby.dev/lazy-images-feedback`,
    noCI: true,
    testFitness: () => {
      const semverConstraints = {
        // Because of this, this flag will never show up
        'gatsby-plugin-sharp': `>=2.10.0`,
      };
      if (satisfiesSemvers(semverConstraints)) {
        return `LOCKED_IN`;
      } else {
        // gatsby-plugin-sharp is either not installed or not new enough so
        // just disable — it won't work anyways.
        return false;
      }
    },
    requires: `Requires gatsby-plugin-sharp@2.10.0 or above.`,
  },
  {
    name: `PRESERVE_WEBPACK_CACHE`,
    env: `GATSBY_EXPERIMENTAL_PRESERVE_WEBPACK_CACHE`,
    command: `all`,
    telemetryId: `PreserveWebpackCache`,
    experimental: false,
    description: `Use webpack's persistent caching and don't delete webpack's cache when changing gatsby-node.js & gatsby-config.js files.`,
    umbrellaIssue: `https://gatsby.dev/cache-clearing-feedback`,
    testFitness: () => `LOCKED_IN`,
  },
  {
    name: `DEV_WEBPACK_CACHE`,
    env: `GATSBY_EXPERIMENTAL_DEV_WEBPACK_CACHE`,
    command: `develop`,
    telemetryId: `DevWebackCache`,
    experimental: false,
    description: `Enable webpack's persistent caching during development. Speeds up the start of the development server.`,
    umbrellaIssue: `https://gatsby.dev/cache-clearing-feedback`,
    testFitness: () => `LOCKED_IN`,
  },
  {
    name: `PRESERVE_FILE_DOWNLOAD_CACHE`,
    env: `GATSBY_EXPERIMENTAL_PRESERVE_FILE_DOWNLOAD_CACHE`,
    command: `all`,
    telemetryId: `PreserveFileDownloadCache`,
    experimental: false,
    description: `Don't delete the downloaded files cache when changing gatsby-node.js & gatsby-config.js files.`,
    umbrellaIssue: `https://gatsby.dev/cache-clearing-feedback`,
    testFitness: () => true,
  },
  {
    name: `PARALLEL_SOURCING`,
    env: `GATSBY_EXPERIMENTAL_PARALLEL_SOURCING`,
    command: `all`,
    telemetryId: `ParallelSourcing`,
    experimental: true,
    description: `Run all source plugins at the same time instead of serially. For sites with multiple source plugins, this can speedup sourcing and transforming considerably.`,
    umbrellaIssue: `https://gatsby.dev/parallel-sourcing-feedback`,
    testFitness: () => true,
  },
  {
    name: `LMDB_STORE`,
    env: `GATSBY_EXPERIMENTAL_LMDB_STORE`,
    command: `all`,
    telemetryId: `LmdbStore`,
    experimental: true,
    umbrellaIssue: `https://gatsby.dev/lmdb-feedback`,
    description: `Store nodes in a persistent embedded database (vs in-memory). Lowers peak memory usage. Requires Node v14.10 or above.`,
    testFitness: () => {
      if (_CFLAGS_.GATSBY_MAJOR === `4`) {
        return `LOCKED_IN`;
      }

      const [major, minor] = process.versions.node.split(`.`);
      return (Number(major) === 14 && Number(minor) >= 10) || Number(major) > 14;
    },
    requires: `Requires Node v14.10 or above.`,
  },
  {
    name: `PARALLEL_QUERY_RUNNING`,
    env: `GATSBY_EXPERIMENTAL_PARALLEL_QUERY_RUNNING`,
    command: `build`,
    telemetryId: `PQR`,
    experimental: true,
    umbrellaIssue: `https://gatsby.dev/pqr-feedback`,
    description: `Parallelize running page queries in order to better saturate all available cores. Improves time it takes to run queries during gatsby build. Requires Node v14.10 or above.`,
    includedFlags: [`LMDB_STORE`],
    testFitness: () => {
      if (_CFLAGS_.GATSBY_MAJOR === `4`) {
        return `LOCKED_IN`;
      }

      const [major, minor] = process.versions.node.split(`.`);
      return (Number(major) === 14 && Number(minor) >= 10) || Number(major) > 14;
    },
    requires: `Requires Node v14.10 or above.`,
  },
  {
    name: `DETECT_NODE_MUTATIONS`,
    env: `GATSBY_DETECT_NODE_MUTATIONS`,
    command: `all`,
    telemetryId: `DetectNodeMutations`,
    description: `Diagnostic mode to log any attempts to mutate node directly. Helpful when debugging missing data problems. See https://gatsby.dev/debugging-missing-data for more details.`,
    experimental: false,
    testFitness: () => true,
  },
];

module.exports = {
  FAST_DEV: true,
  PARALLEL_QUERY_RUNNING: true,
  PARALLEL_SOURCING: true,
  PRESERVE_WEBPACK_CACHE: true,
  DEV_WEBPACK_CACHE: true,
};
