# Introduction

[![Greenkeeper badge](https://badges.greenkeeper.io/PeterNgTr/aklamio.svg)](https://greenkeeper.io/)

This project demonstrates the E2E tests

# How to use

This e2e test is done using CodeceptJS https://codecept.io/

### Tech

e2e test uses a number of open source projects to work properly:

* https://nodejs.org/en/ - evented I/O for the backend
* https://codecept.io/ - CodeceptJS

Additionally, the tests are executed via [Browserstack](https://www.browserstack.com) and results are updated accordingly with this helper [codeceptjs](https://www.npmjs.com/package/codeceptjs-bshelper)

### Installation

e2e test requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies.

```sh
$ cd aklamio
$ npm install
```

### How to trigger UI tests

For all possible combinations of browsers and OSes, please refer to `codecept.conf.js`

- To run the tests with Chrome 74 on Windows 10

```sh
BROWSER=chrome_74_win_10 npx codeceptjs run
```

- To run the tests with FF 66 on Windows 10

```sh
BROWSER=firefox_66_win_10 npx codeceptjs run
```

- To run the tests with Safari 12 on MacOS Mojave

```sh
BROWSER=safari_12_mojave npx codeceptjs run
```

- To run the tests with IE 11 on Windows 10

```sh
BROWSER=ie_11_win_10 npx codeceptjs run
```

### Travis CI

This project is also configured to be triggered in Travis CI/ Gitlab CI whenever we push a new commit. Tests will be run against 4 browsers: IE11, Safari, Firefox and Chrome.

What you can see after the TravisCI is done
![Travis-CI](https://d1sz9tkli0lfjq.cloudfront.net/items/0q432S3R0x0I2e182J47/Image%202019-05-07%20at%203.56.45%20PM.png?v=8a850bbd)

To see more details, clicking on any job, for instance:
```sh
84.91s$ BROWSER=${BROWSER} npx codeceptjs run
creating output directory: /home/travis/build/PeterNgTr/aklamio/output
CodeceptJS v2.1.1
Using test root "/home/travis/build/PeterNgTr/aklamio"
Login --
✔ Login with invalid credentials in 13851ms
Test has Passed
Test finished. Link to job: https://automate.browserstack.com/builds/2815b335c0674ab0b5eb0b2bd6f53ead2f92f953/sessions/8526a2358f5d1595723a49c083b03a0fa8c2945a?auth_token=4660aacfcf0a9ae19b44c8953eeb5d10c578ddf8c0620de4f11e8835d57c28df
Referral --
✔ Refer product 1 successfully in 16811ms
Test has Passed
Test finished. Link to job: https://automate.browserstack.com/builds/2815b335c0674ab0b5eb0b2bd6f53ead2f92f953/sessions/02cc287a3e5d00ef6a06284f1d27b1d884c05796?auth_token=e7ace75d3be85aa309eb4c5b82beb3a9351e41818e78f6d98957de805b066c4f
✔ Refer product 1 with invalid email in 16273ms
Test has Passed
Test finished. Link to job: https://automate.browserstack.com/builds/2815b335c0674ab0b5eb0b2bd6f53ead2f92f953/sessions/0cc3cca50c811a6a0a6df3aabda28281d45b51c5?auth_token=8cc15db8547c34d92028c8561e4f96f011f76a133deb1c5d9197bce7c3c8dd2a
  OK  | 3 passed   // 1m
The command "BROWSER=${BROWSER} npx codeceptjs run" exited with 0.
```

### Test Results in BrowserStack
Our tests are executed against BrowserStack, hence you will see the results from there, in case of failed tests, you can see detail logs.
![BS-Automate](https://d1sz9tkli0lfjq.cloudfront.net/items/3y380t342O1x1i1H0a1Y/Image%202019-05-07%20at%204.01.05%20PM.png?v=b4a92e01)

Moreover you can find the public link of run tests that are exposed in TravisCI logs and this eases us much in case of sharing to others.

```sh
✔ Refer product 1 with invalid email in 16273ms
Test has Passed
Test finished. Link to job: https://automate.browserstack.com/builds/2815b335c0674ab0b5eb0b2bd6f53ead2f92f953/sessions/0cc3cca50c811a6a0a6df3aabda28281d45b51c5?auth_token=8cc15db8547c34d92028c8561e4f96f011f76a133deb1c5d9197bce7c3c8dd2a
```





