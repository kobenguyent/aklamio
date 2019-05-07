# Introduction

This project demonstrates the E2E tests

# How to use

This e2e test is done using CodeceptJS https://codecept.io/

### Tech

e2e test uses a number of open source projects to work properly:

* https://nodejs.org/en/ - evented I/O for the backend
* https://codecept.io/ - CodeceptJS

Addtionally, the tests are executed via [Browserstack](https://www.browserstack.com) and results are updated accordingly with this helper [codeceptjs](https://www.npmjs.com/package/codeceptjs-bshelper)

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




