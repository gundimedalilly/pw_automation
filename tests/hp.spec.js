const {test,expect} = require('@playwright/test')
    test ('homepageTitle is',async({page}) =>{
        await page.goto("https://www.amazon.com/");
        let pagetitl= page.title();
        await expect(page).toHaveTitle('login')
        console.log("page title is valid and it is" +pagetitl);
        await page.close();

}
)
