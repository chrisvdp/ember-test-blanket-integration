/* globals blanket, module */

var options = {
  modulePrefix: 'ember-test-blanket-integration',
  filter: '//.*ember-test-blanket-integration/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
