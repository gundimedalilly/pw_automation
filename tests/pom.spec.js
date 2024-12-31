import {test,expect} from '@playwright/test'
import { Loginpage } from '../pages/Loginpage';
import { HomePage } from '../pages/HomePage';
import { CartPage1 } from '../pages/CartPage1';
//login
//home
//cart
//logout 
 test ('adding phone Test',async({page}) => {
    const prd
 //write code
 
 const login = new Loginpage(page);
 await login.gotologinpage();
    await login.login('kvsudha2016','training@24');
    await page.waitForTimeout(4000);
//home page
    const hompage = new HomePage(page);
     await hompage.HomepageNaviagtion();
    await page.waitForTimeout(4000);
    await hompage.addProductToCart("prdname");
    await page.waitForTimeout(4000);
//cart page

    const cp = new CartPage1(page);
    await cp.GoToCartPage();
    await page.waitForTimeout(4000);
    await cp.validateaddedproduct("prdname");
    await page.waitForTimeout(2000);
    await cp.producttotalprice();
    await page.waitForTimeout(3000);
})


test ('adding laptop Test',async({ page }) => {
    
    const laptopname ="MacBook air";
    //login    
    const login = new Loginpage(page);
    await login.gotologinpage();
       await login.login('kvsudha2016','training@24');
       await page.waitForTimeout(4000);
   //home page
       const hompage = new HomePage(page);
        await hompage.HomepageNaviagtion();
       await page.waitForTimeout(5000);
       await hompage.LaptopNavigation();
       await page.waitForTimeout(5000);
       await hompage.addProductToCart('laptopname');
       await page.waitForTimeout(5000);
   //cart page
   
       const cp = new CartPage1(page);
       await cp.GoToCartPage();
       await page.waitForTimeout(4000);
       await cp.validateaddedproduct('laptopname');
       await page.waitForTimeout(2000);
       await cp.producttotalprice();
       await page.waitForTimeout(3000);
   

   })
   