import {test,expect} from '@playwright/test'
test ('Locators',async({page}) =>{
  await page.goto("https://www.amazon.com");
  await page1.getByPlaceholder('Type characters').click();
  await page1.getByPlaceholder('Type characters').press('CapsLock');
  await page1.getByPlaceholder('Type characters').fill('RHUHBX');
  await page1.getByRole('button', { name: 'Continue shopping' }).click();
  await page1.getByText('Your Account Help Cart').click();
  await page1.getByRole('link', { name: 'Your Orders Track, return,' }).click();
  await page1.getByLabel('Open All Categories Menu').click();
  await page1.getByRole('link', { name: 'Electronics' }).click();
  await page1.getByRole('link', { name: 'Headphones' }).click();
  await page1.locator('.rush-component > .a-link-normal').first().click();
  await page1.goto('https://www.amazon.com/Bluetooth-Headphones-Earphones-Cancelling-Waterproof/dp/B0CYPC4V3W/ref=sr_1_1_sspa?qid=1728624685&s=electronics&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&th=1');
  await page1.locator('#corePrice_desktop').getByText('$').nth(1).click();
  await page1.locator('#bylineInfo_feature_div div').click();
  await page1.locator('#centerCol').click();
  await page1.locator('#exportsUndeliverable-cart-announce').click();
});
