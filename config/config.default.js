'use strict';

exports.define = {};

exports.babel = (babelConfig, babel, config) => {
  bableConfig.plugins.push([
    require.resolve('babel-plugin-transform-define'),
    config.define
  ]);

  return babelConfig;
}
