class SauceDemoPage {

    constructor(page) {
        this.page = page;
    }
async openWebsite() {

    await this.page.goto(
        "https://www.saucedemo.com/",
        {
            waitUntil: "domcontentloaded",
            timeout: 60000
        }
    );

}

    async login() {

        await this.page.fill("#user-name", "standard_user");

        await this.page.waitForTimeout(1000);

        await this.page.fill("#password", "secret_sauce");

        await this.page.waitForTimeout(1000);

        await this.page.click("#login-button");

        await this.page.waitForTimeout(2000);
    }

    async addProductToCart() {

        await this.page.click("#add-to-cart-sauce-labs-backpack");

        await this.page.waitForTimeout(2000);
    }

    async getCartCount() {

        return await this.page.textContent(".shopping_cart_badge");
    }

    async openCart() {

        await this.page.click(".shopping_cart_link");

        await this.page.waitForTimeout(2000);
    }

    async getProductName() {

        return await this.page.textContent(".inventory_item_name");
    }
}

module.exports = SauceDemoPage;