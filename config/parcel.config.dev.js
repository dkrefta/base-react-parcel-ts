'use strict';

const paths = require('./paths');
const publicPath = paths.servedPath;

module.exports = {
  // The build folder.
  outDir: paths.appBuild || './dev',
  outFile: 'index.html', // The name of the outputFile
  // We inferred the "public path" (such as / or /my-project) from homepage.
  publicUrl: publicPath,
  watch: true,
  cache: true,
  cacheDir: '.cache', // The directory cache gets put in, defaults to .cache
  minify: true,
  target: 'browser', // browser/node/electron, defaults to browser
  https: false, // Server files over https or http, defaults to false
  logLevel: 3, // 3 = log everything, 2 = log warnings & errors, 1 = log errors
  hmrPort: 0, // The port the hmr socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
  sourceMaps: true,
  hmrHostname: '', // A hostname for hot module reload, default to ''
  detailedReport: true, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
  output: {
    // parcel doesnt need this at all but this shims CRA's webpack.config.prod.js
    publicPath: publicPath
  }
};
