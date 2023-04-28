import Base  from "./base.js";

export default class LandingPage extends Base {
  constructor(page) {
    super(page);
  }

  async visit() {
    await this.gotoURL()
  }

  async checkIFElementPresentInPage(byPlaceHolder, el) {
    const selector = byPlaceHolder.replace('{value}', element);
    const isElementVisible = await this.checkIfElementPresent(selector);
    return isElementVisible;
  }
}