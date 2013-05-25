basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  './test/e2e/**/*.js'
];

port = 9203;
runnerPort = 9303;
captureTimeout = 5000;

shared = require(__dirname + "/karma.shared.conf.js").shared
growl     = shared.growl;
colors    = shared.colors;
singleRun = shared.singleRun;
autoWatch = shared.autoWatch;
browsers  = shared.defaultBrowsers;
reporters = shared.defaultReporters;
proxies = {
  '/app': 'http://localhost:8000'
};
