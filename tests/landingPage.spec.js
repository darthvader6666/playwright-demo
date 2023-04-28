import LandingPage from "../pages/landingPage.js";
import { test, expect } from '@playwright/test';
import { element } from "../pageObjects/landingPage.json";
import { byPlaceHolder, byText } from "../pageObjects/elementLocatorVia.json";


let landingPage;

test.describe('Test Landing Page', () => {
  test.beforeEach(async ({page}) => {
    landingPage = new LandingPage(page);
    await landingPage.gotoURL()
  });

  test('Will assert for web element', async () => { 
    const isElementVisible = await landingPage.checkIfElementPresent(byPlaceHolder, element.header)
    console.log("teststts", isElementVisible);
    expect(isElementVisible);
  })
})