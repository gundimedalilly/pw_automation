test ('dynamic window handling',async({page}) =>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1= await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page1.waitForTimeout(3000);
    await expect(page1).toHaveTitle("OrangeHRM");
//to handle dynamicaly loaded pages
    const pagepromise = context.waitForEvent('page');
    await page1.locator("//a[text()='OrangeHRM, Inc']").click();
    //opening after click so we have to handle that new page
    const newpage= await pagepromise;
    await expect(newpage).toHaveTitle("Human Resources Management Software | OrangeHRM");
    await newpage.waitForTimeout(3000);
    await newpage.locator("//input[@name='EmailHomePage']").fill("asd@gmail.com");
    await newpage.waitForTimeout(5000);
})