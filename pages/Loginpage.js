exports.Loginpage=
class Loginpage {
    constructor(page){
        this.page = page;
        this.loginlink='#login2';
        this.username='#loginusername';
        this.password= '#loginpassword';
        this.loginbutton = "//button[text()='Log in']";
    }
    async gotologinpage(){
        await this.page.goto("https://www.demoblaze.com/index.html");
    }
 async login(username1,password1){
await this.page.locator(this.loginlink).click();
await this.page.locator(this.username).fill(username1);
await this.page.locator(this.password).fill(password1);
await this.page.locator(this.loginbutton).click();
 }
}