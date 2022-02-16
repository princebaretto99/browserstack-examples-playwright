![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# BrowserStack Examples Playwright Framework <a href="https://playwright.dev/"><img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright" height="30" />

## Introduction

Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.

This BrowserStack Example repository demonstrates a test framework written in Playwright Framework with parallel testing capabilities. The Playwright test scripts are written for the open source [BrowserStack Demo web application](https://bstackdemo.com) ([Github](https://github.com/browserstack/browserstack-demo-app)). This BrowserStack Demo App is an e-commerce web application which showcases multiple real-world user scenarios. The app is bundled with offers data, orders data and products data that contains everything you need to start using the app and run tests out-of-the-box.

The Playwright tests are run on different platforms like on-prem and BrowserStack using various run configurations and test capabilities.

---

## Repository setup

- Clone the repository

- Ensure you have the following dependencies installed on the machine
    - Node.js

    Install the requirements:
    ```sh
    npm install
    ```


## About the tests in this repository

  This repository contains the following Selenium tests:

  | Module   | Test name                          | Description |
  | ---   | ---                                   | --- |
  | e2e      | E2E Test                | This test scenario verifies successful product purchase lifecycle end-to-end. It demonstrates the [Page Object Model design pattern](https://www.browserstack.com/guide/page-object-model-in-selenium) and is also the default test executed in all the single test run profiles. |
  | login    | Check if Signin opens on clicking on favourites nav item          | This test verifies the login workflow with different types of valid login users. |
  | login    | Check Login with locked_user               | This test verifies the login workflow error for a locked user. |
  | offers   | Set GPS location to Mumbai and check offers     | This test mocks the GPS location for Mumbai and verifies that the product offers applicable for the Mumbai location are shown.   |
  | product  | Apply Apple And Samsung Filter          | This test verifies that the Apple products are only shown if the Apple vendor filter option is applied. |
  | product  | Apply 'Lowest to Highest' Order By Filter   | This test verifies that the product prices are in ascending order when the product sort "Lowest to Highest" is applied. |
  | user     | Check Login with image_not_loading_user | This test verifies that the product images load for user: "image_not_loading_user" on the e-commerce application. Since the images do not load, the test case assertion fails.|
  | user     | Check Order in existing_orders_user |  This test verifies that existing orders are shown for user: "existing_orders_user"  |
  
  ---


## Test infrastructure environments 

- [On-premise/self-hosted](#on-premise-self-hosted)
- [BrowserStack](#browserstack)


# On Premise / Self Hosted

This infrastructure points to running the tests on your own machine using a browser (e.g. Chrome) using the browser's driver executables (e.g. ChromeDriver for Chrome). #{ Selenium enables this functionality using WebDriver for many popular browsers.}

## Prerequisites

- For this infrastructure configuration (i.e on-premise), ensure that the ChromeDriver executable is placed in the `/src/test/resources/drivers` folder.

Note: The ChromeDriver version must match the Chrome browser version on your machine.

## Running Your Tests

### Run a specific test on your own machine

- How to run the test?

  To run a specific test scenario, use the following command with the additional 'test-name' argument:
  
  ```sh
  robot --variable testType:on-prem --test "<Test scenario name>" . 
  ```

  where,  the argument 'test-name' can be any RobotFramework scenario name configured in this repository.
  
  E.g. "Check Login with locked_user", "E2E Test", "Apply 'Lowest to Highest' Order By Filter" or any of the other test scenario names, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.

- Output

  This run profile executes a specific test scenario on a single browser instance on your own machine.


### Run the entire test suite on your own machine

  To run the entire test suite on your own machine, use the following command:
  
  ```sh
  robot --variable testType:on-prem --suite <Suite-name> .
  ```


- Output

  This run profile executes the entire test suite sequentially on a single browser, on your own machine.

  
---


# BrowserStack

[BrowserStack](https://browserstack.com) provides instant access to 2,000+ real mobile devices and browsers on a highly reliable cloud infrastructure that effortlessly scales as testing needs grow.

## Prerequisites

- Create a new [BrowserStack account](https://www.browserstack.com/users/sign_up) or use an existing one.
- Identify your BrowserStack username and access key from the [BrowserStack Automate Dashboard](https://automate.browserstack.com/) and export them as environment variables using the below commands.

    - For \*nix based and Mac machines:

  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

    - For Windows:

  ```shell
  set BROWSERSTACK_USERNAME=<browserstack-username>
  set BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
  Alternatively, you can also hardcode username and access_key objects in the [fixtures.js](./fixtures.js) file.

Note:
- We have configured a list of test capabilities in the [playwright-bstack.config.js](resources/conf/playwright-bstack.config.js) file. You can certainly update them based on your device / browser test requirements. 
- The exact test capability values can be easily identified using the [Browserstack Capability Generator](https://browserstack.com/automate/capabilities) and the allowed Browsers and OS are mentioned [here](https://www.browserstack.com/docs/automate/playwright/browsers-and-os)


## Running Your Tests

### Run a specific test on BrowserStack

In this section, we will run a single test on Chrome browser on Browserstack. To change test capabilities for this configuration, please refer to the `playwright-bstack.config.js` file.

- How to run the test?
  

  To run a specific test scenario, use the following command :
  Note: You can change the test you want to run by replacing the respective spec file.

  ```sh
  npx playwright test <spec-file> --config=resources/conf/playwright-bstack.config.js --project 'chrome@latest:Windows 10@browserstack'"

  ```

  where,  the argument '<spec-file>' can be any spec files from the repository.
  
  E.g. "e2e.spec.js", "login.spec.js", "product.spec.js" or any of the other tests, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.

  Also, the argument '<project-name>' can be any of the project names from the `playwright-bstack.conf.js` file.


- Output

  This run profile executes a single test on a single browser on BrowserStack. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.


### Run the entire test suite in parallel on a single BrowserStack browser

In this section, we will run the tests in parallel on a single browser on Browserstack. Refer to `playwright-bstack.conf.js` file to change test capabilities for this configuration.

- How to run the test?

  To run the entire test suite in parallel on a single BrowserStack browser, use the following command:
  
  ```sh
  npx playwright test --config=resources/conf/playwright-bstack.config.js --project '<project-name>' --workers 5
  ```

 Note: The `workers` argument mentions the number of tests you want to run in parallel at a time.

- Output

  This run profile executes the entire test suite in parallel on a single BrowserStack browser. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.



### Run a tests on BrowserStack which need Local Environment access

## Prerequisites
* Clone the BrowserStack demo application repository.
    ```sh
    git clone https://github.com/browserstack/browserstack-demo-app
    ```
* Please follow the README.md on the BrowserStack demo application repository to install and start the dev server on localhost.

* In this section, we will run a single test case to test the BrowserStack Demo app hosted on your local machine i.e. localhost. Refer to the `playwright-bstack-local.conf.js` file for configuration and setup and teardown processes.

Note: You may need to provide additional BrowserStackLocal arguments to successfully connect your localhost environment with BrowserStack infrastructure. (e.g if you are behind firewalls, proxy or VPN).

* Further details for successfully creating a BrowserStackLocal connection can be found here:

    * [Local Testing with Automate](https://www.browserstack.com/local-testing/automate)
  
## [Web application hosted on internal environment] Run a specific test on BrowserStack using BrowserStackLocal

In this section, we will run a single test on Chrome browser on Browserstack. To change test capabilities for this configuration, please refer to the `playwright-bstack-local.config.js` file.
  
  To run a specific test scenario, use the following command :
  Note: You can change the test you want to run by replacing the respective spec file.

  ```sh
  npx playwright test <spec-file> --config=resources/conf/playwright-bstack-local.config.js --project 'chrome@latest:Windows 10@browserstack'"
  ```

  where,  the argument '<spec-file>' can be any spec files from the repository.
  
  E.g. "e2e.spec.js", "login.spec.js", "product.spec.js" or any of the other tests, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.

  Also, the argument '<project-name>' can be any of the project names from the `playwright-bstack.conf.js` file.


- Output

  This run profile executes a single test on a single browser on BrowserStack. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.


### [Web application hosted on internal environment] Run a tests in parallel on BrowserStack using BrowserStackLocal

Refer the below snippet, here we will run the tests in parallel on a single browser on Browserstack. Refer to `playwright-bstack-local.conf.js` file to change test capabilities for this configuration.
  
  ```sh
  npx playwright test --config=resources/conf/playwright-bstack-local.config.js --project '<project-name>' --workers 5
  ```

Refer the below snippet, here we will run the tests in parallel on a multiple browser on Browserstack. Refer to `playwright-bstack-local.conf.js` file to change test capabilities for this configuration.
  
  ```sh
  npx playwright test --config=resources/conf/playwright-bstack-local.config.js --workers 5
  ```

 Note: The `workers` argument mentions the number of tests you want to run in parallel at a time.

- Output

  This run profile executes the entire test suite in parallel on a single BrowserStack browser. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.


## Additional Resources

- View your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
- Documentation for writing [Automate test scripts in Java](https://www.browserstack.com/automate/java)
- Customizing your tests capabilities on BrowserStack using our [test capability generator](https://www.browserstack.com/automate/capabilities)
- [Using Automate REST API](https://www.browserstack.com/automate/rest-api) to access information about your tests via the command-line interface
- Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)
- For testing public web applications behind IP restriction, [Inbound IP Whitelisting](https://www.browserstack.com/local-testing/inbound-ip-whitelisting) can be enabled with the [BrowserStack Enterprise](https://www.browserstack.com/enterprise) offering

