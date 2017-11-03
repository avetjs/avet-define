'use strict';

exports.define = {};

exports.build = {
  babel: (babelConfig, config) => {
    babelConfig.plugins = babelConfig.plugins || [];
    babelConfig.plugins.push([
      require.resolve('babel-plugin-transform-define'),
      config.define
    ]);
    return babelConfig;
  }
}
