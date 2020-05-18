exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: 'parallel_test',
    build: 'webdriver-browserstack'
  },

  capabilities: [{
    browser: 'chrome'
  },{
    browser: 'firefox'
  },{
    browser: 'internet explorer'
  },{
    browser: 'safari'
  }],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',
  
  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for (var key in caps) { exports.config.commonCapabilities[key] = caps[key]; }
  return exports.config.commonCapabilities
});

