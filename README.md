# Playwright Cucumber SauceDemo Automation Framework

## Project Overview

This project demonstrates UI test automation using Playwright and Cucumber with JavaScript.

The framework follows the Page Object Model (POM) design pattern and automates an end-to-end e-commerce flow on SauceDemo.

## Tech Stack

* Playwright
* Cucumber
* JavaScript
* Node.js

## Project Structure

```text
PlaywrightCucumberProject
│
├── features
│   └── cart.feature
│
├── pages
│   └── SauceDemoPage.js
│
├── step-definitions
│   └── cartSteps.js
│
├── package.json
└── README.md
```

## Test Scenario

### Add Product To Cart

1. Open SauceDemo website
2. Login with valid credentials
3. Add Sauce Labs Backpack to cart
4. Verify cart badge count
5. Open cart
6. Verify product name

## Installation

```bash
npm install
npx playwright install
```

## Execute Test

```bash
npx cucumber-js --require step-definitions/cartSteps.js
```

## Test Website

https://www.saucedemo.com/

## Features Implemented

* Playwright Automation
* Cucumber BDD
* Page Object Model (POM)
* Assertions
* Hooks (Before & After)
* End-to-End Test Scenario

## Author

Geetha DR
Automation Test Engineer

```
```
