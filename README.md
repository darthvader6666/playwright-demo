# Playwright Demo

This is a demo project to showcase how to use [Playwright](https://playwright.dev/) to write end-to-end tests for a web application. The project uses [Jest](https://jestjs.io/) as the test runner.

## Project Structure

```
├── pageObjects/
|   ├── landingPage.json
|   ├── elementLocatorVia.json
|   └── url.json
├── pages/
|   ├── base.js
|   └── landingPage.js
├── tests/
|   └── landingPage.spec.js
└── package.json
```

- `pageObjects`: This folder contains JSON files that store various data related to the web application being tested, such as URLs, element locators, and page object data.
- `pages`: This folder contains JavaScript files that define the page objects for the web application.
- `tests`: This folder contains JavaScript files that define the tests using Playwright and Jest.
- `package.json`: This file contains information about the project, such as dependencies and scripts.

## Installation

1. Clone the repository:

```
git clone https://github.com/<your-username>/playwright-demo.git
```

2. Install the dependencies:

```
cd playwright-demo
npm install
```

3. Start the test runner:

```
npx playwright test landingPage.spec.js (for headless)
npx playwright test --ui (for UI debugging)
```

## Usage

The project is a demo of how to use Playwright with Jest to write end-to-end tests for a web application. The tests are defined in `tests/landingPage.spec.js`, which imports the `LandingPage` page object from `pages/landingPage.js`. The `LandingPage` page object extends the `Base` page object from `pages/base.js`, which contains methods to navigate to a URL and check if an element is present on the page.

The `LandingPage` page object contains methods to interact with the web application's landing page, such as clicking on buttons and entering text into input fields. The tests in `tests/landingPage.spec.js` use the `LandingPage` page object to interact with the web application and make assertions about its behavior.

## Conclusion

This demo project showcases how to use Playwright to write end-to-end tests for a web application. It provides a basic structure for organizing page objects, element locators, and test files. With this foundation, developers can write more complex tests to thoroughly test their web applications.
