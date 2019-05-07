
### Initialization

Once receiving this task, I feel much excited to work with, to be honest, any challenge I always love to deal with cause throughout of it I could learn more and more.

Well, firstly, of course I need to read throughout the task to learn what I should do. Okay then I will need to create an automation tests that cover 3 test cases and a bonus point to integrate my tests with a CI/CD.

Let deep dive in the task, as a first step, after having clear about the task, I started to do the manual tests with all the test cases that I need to implement the automation flows for it. After having the manual flows now it's time to start the implementation.

### Choosing framework

Having trying many frameworks, now, I found out a favorite framework of mine, it's called [CodeceptJS](https://codecept.io/). The reason I love this cause CodeceptJS is multi-backend testing framework. It can execute tests using different libraries like `webdriverio`, `Puppeteer`, `Protractor`, etc. or literally meaning `helpers` you can switch the helper as your choice. Also it supports many things more which you can find in their webpage. I'm also an active contributor on that open source project, I implemented/fixing many cool things there. One of this is [BrowserStack Helper](https://www.npmjs.com/package/codeceptjs-bshelper) which is used in this task to update `Test Names`, `Test Results` after execution.

### Organization

Well, I decided to structure the tests as page objects models, having said that, I mean, we should keep our tests and element locators separately, this will keep code clean and easy to understand and maintain,  any change in UI can easily be implemented, updated and maintained into the Page Objects and Classes. That you will see in project setup, a folder called `pages` where page objects sit and `test scenarios` will sit in `test` folder. 

Each page object will keep `element locators` and `functions` that can be called and reused anywhere it is needs.

### Implementation
Now it's time to begin the journey, capturing locators is not an easy game, you need to think of how to make it efficiently. Everything went well. I started the run the first test. Oh no, it's failing. Haha, I didn't expect everything passed after the first try. That's weird, the locator is proper, why the console logs told that element is not located. I tried the same locator with `chrome dev tools`, it's working. All right, after some times I found out, we had an `iframe`. Aha,  we need to switch to an `iframe` before locating elements. Phew, done. My test case was now passed. Amazing! I finished the rest of test cases.

### Cross-browsers testing
The beauty of web testing, haha, I would say, is cross-browsers testing, if your tests are passed on Chrome, it doesn't mean it will pass on other browsers. Now [BrowserStack](https://www.browserstack.com) enters the story. The good test would be covered as many browsers as possible. Then I updated the codeceptjs config to make the tests can be executed with many combinations of browsers in BrowserStack. My tests are working perfectly with
- BROWSER=ie_11_win_10
- BROWSER=chrome_74_win_10
- BROWSER=firefox_66_win_10
- BROWSER=safari_12_mojave

### CI/CD
That is even though a bonus point, but to me, I'm always curious how my tests are running in CI/CD. I chose `TravisCI` to start with, having some experiences with other CI/CD like `Jenkins`, `TeamCity`, `Gitlab` but I would say `TravisCI` easy to play with compared to others as an open source project, integration is quite simple. You can refer to this for more details how the test are running [https://travis-ci.org/PeterNgTr/aklamio](https://travis-ci.org/PeterNgTr/aklamio)

*Note*: To keep the free version `TravisCI` works with this, I will leave the project as `public`. 

### Test Results

An important thing after the execution is test results. You can either check the test results from `TravisCI` or `BrowserStack`

Our tests are executed against BrowserStack, hence you will see the results from there, in case of failed tests, you can see detail logs.

![BS-Automate](https://d1sz9tkli0lfjq.cloudfront.net/items/3y380t342O1x1i1H0a1Y/Image%202019-05-07%20at%204.01.05%20PM.png?v=b4a92e01)

 
Moreover you can find the public link of run tests that are exposed in TravisCI logs and this eases us much in case of sharing to others. Thanks to my custom helper [BrowserStack Helper](https://www.npmjs.com/package/codeceptjs-bshelper) 

 
```sh

✔ Refer product 1 with invalid email in 16273ms

Test has Passed

Test finished. Link to job: https://automate.browserstack.com/builds/2815b335c0674ab0b5eb0b2bd6f53ead2f92f953/sessions/0cc3cca50c811a6a0a6df3aabda28281d45b51c5?auth_token=8cc15db8547c34d92028c8561e4f96f011f76a133deb1c5d9197bce7c3c8dd2a

```