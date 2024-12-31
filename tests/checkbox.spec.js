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
    const Recruitment= await page.locator("//li//span[text()='Recruitment']");
    //const B= Recruitment.isVisible();
    console.log("Recruitment IS VISIBLE"+Recruitment);
    Recruitment.click();
    await page.waitForTimeout(5000);
    const firststbox =await page.locator("//input[@type='checkbox' and @value=0]");
    const secndbox =await page.locator("//input[@type='checkbox' and @value=1]");
    const a=firststbox.isChecked();
    console.log("it is checked "+a);
    //await page.waitForTimeout(5000);
    firststbox.check();
    secndbox.click();
    
})