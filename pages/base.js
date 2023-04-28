import { expect } from "@playwright/test";
import { baseURL } from "../pageObjects/url.json";

export default class Base{
  constructor(page) {
    this.page = page;
  }

  async gotoURL() {
		await this.page.goto(baseURL)
  }

  async checkIfElementPresent(selector) {
    let element = await this.page.$(selector);
    if (element === null) {
      return false;
    }
    return await element.isVisible();
  }
}