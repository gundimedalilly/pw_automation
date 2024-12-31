import {test,expect} from '@playwright/test'
test ('Locators',async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    const img = await page.getByAltText('company-branding')
    await expect(img).toBeVisible();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button',{type: 'submit'}).click();
    await page.waitForTimeout(10000);
    const panel= await page.locator("//aside[@class='oxd-sidepanel']").isVisible();
    console.log("panel is displaying " +panel);
  /*  const listpanel = await page.$$("//ul[@class='oxd-main-menu']//li")
      for(const p1 of listpanel)
        {
        const linkName= await p1.textContent();
        console.log(linkName);
        }
*/
    const myinfo= await page.locator("//li//span[text()='My Info']");
    //const B= myinfo.isVisible();
    console.log("MY INFO IS VISIBLE"+myinfo);
     myinfo.click();
    await page.waitForTimeout(5000);
    const personalDetails=await page.locator("//h6[text()='Personal Details']").isVisible();
    console.log("Pers det selected by default"+personalDetails);
    //await expect().toBeVisible()
    //await page.waitForTimeout(5000);
    await  page.getByPlaceholder('First Name').fill("leele");
    await page.getByPlaceholder('Middle Name').fill("devi");
    await page.locator(("//input[@class='oxd-input oxd-input--active']")[1]);
    await page.locator(("//input[@class='oxd-input oxd-input--active']")[3]);
    await page.waitForTimeout(5000);
    await page.locator("//input[@type='radio' and @value=1]").click();
    //await page.locator("//input[@type='radio' and @value=2]").click();

})
