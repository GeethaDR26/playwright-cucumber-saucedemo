const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const assert = require('assert');

setDefaultTimeout(60000);
const SauceDemoPage = require('../pages/SauceDemoPage');

let browser;
let page;
let sauceDemoPage;

Before(async function () {

    browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });

    page = await browser.newPage();

    sauceDemoPage = new SauceDemoPage(page);
});

Given('User opens SauceDemo website', async function () {

    await sauceDemoPage.openWebsite();
});

When('User logs in with valid credentials', async function () {

    await sauceDemoPage.login();
});

When('User adds a product to cart', async function () {

    await sauceDemoPage.addProductToCart();
});

Then('Cart badge should show 1', async function () {

    const count = await sauceDemoPage.getCartCount();

    console.log("Cart Count :", count);

    assert.strictEqual(count, '1');
});

When('User opens cart', async function () {

    await sauceDemoPage.openCart();
});

Then('Product should be displayed in cart', async function () {

    const product = await sauceDemoPage.getProductName();

    console.log("Product :", product);

    assert.strictEqual(
        product,
        'Sauce Labs Backpack'
    );
});

After(async function () {

    await browser.close();
});