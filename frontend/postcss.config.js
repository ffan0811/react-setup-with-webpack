const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    postcssPresetEnv({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      flexbox: 'no-2009'
    })
  ]
};