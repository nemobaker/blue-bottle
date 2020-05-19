require('dotenv').config({path:__dirname+'/./../../.env'})

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_AUTOMATE_KEY || 'BROWSERSTACK_AUTOMATE_KEY',

  updateJob: false,
  specs: [
    './tests/specs/login_test.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'Chrome',
    name: 'login_test',
    build: 'webdriver-browserstack'
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
    ui: 'bdd',
    timeout: 60000
  },
}
