require('import-export');

process.env.IFRAME_ID = `[src="https://sonata.aklamio.com/portals/${process.env.PORTAL_ID}/index.html#route=index"]`;

const _user = process.env.BROWSERSTACK_USERNAME;
const _key = process.env.BROWSERSTACK_ACCESS_KEY;

const commonBrowserstackCapabilities = {
  'browserstack.debug': 'true',
  resolution: '1920x1080',
  project: 'Aklamio',
  build: 'Aklamio Master',
  'browserstack.timezone': 'CEST'
};

const BROWSERS = {
  chrome: [74],
  firefox: [66],
  safari: [12],
  edge: [14, 15, 16],
  ie: [11]
};

const OPERATING_SYSTEMS = {
  WINDOWS: [{ version: '7', tag: 'win_7' }, { version: '8', tag: 'win_8' }, { version: '8.1', tag: 'win_8.1' }, { version: '10', tag: 'win_10' }],
  'OS X': [{ version: 'Mojave', tag: 'mojave' }, { version: 'High Sierra', tag: 'sierra' }, { version: 'El Capitan', tag: 'capitan' }]

};

const browserMatrix = {
  // mobile web capabilities
  chrome_mobile: {
      desiredCapabilities: {
          os: 'OS X',
          os_version: 'Mojave',
          browser: 'Chrome',
          browser_version: '72',
          browserName: 'chrome_mobile',
          realMobile: 'true',
          chromeOptions: {
              mobileEmulation: { deviceName: 'Pixel 2' },
              args: ['window-size=400,800']
          }
      }
  }
};

Object.keys(BROWSERS).forEach(browserName => {
  BROWSERS[browserName].forEach(version => {
      for (const os in OPERATING_SYSTEMS) {
          OPERATING_SYSTEMS[os].forEach(osVersion => {
              browserMatrix[`${browserName}_${version}_${osVersion.tag}`] = {
                  desiredCapabilities: {
                      browser: browserName,
                      browserName,
                      browser_version: version,
                      os,
                      os_version: osVersion.version
                  }
              };
          });
      }
  });
});

Object.keys(browserMatrix).forEach(key => {
  Object.assign(browserMatrix[key].desiredCapabilities, commonBrowserstackCapabilities);
});

exports.config = {
  tests: './test/*.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://sonata.aklamio.info',
      windowSize: '1980x1080',
      smartWait: 5000,
      waitForTimeout: 5000,
      browser: 'chrome',
      user: _user,
      key: _key,
      host: 'hub.browserstack.com',
      port: 443,
      path: '/wd/hub',
      desiredCapabilities: browserMatrix[process.env.BROWSER].desiredCapabilities
    },
    BrowserstackHelper: {
      require: "codeceptjs-bshelper",
      user: _user,
      key: _key
    },
    REST: {},
  },
  include: {
    I: './steps_file',
    integrationPage: './pages/integration',
    referralModalBox: './pages/referralModal',
    data: './data_test',
  },
  mocha: {},
  name: 'aklamio',
  plugins: {
    wdio: {
      enabled: false,
      services: ['selenium-standalone']
    }
  },
  multiple: {
    parallel: {
        chunks: (files) => {
            return files.map(file => [file]);
        }
    }
},
}