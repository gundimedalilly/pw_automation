exports.HomePage=
class HomePage {

    constructor(page){
        this.page = page;
        this.homelink="//a[text()='Home ']";
        //this.productlist="//div[@class='card-block']//h4/a";
        this.laptoplink= "//a[text()='Laptops']"
        this.laptoplist="//div[@class='card-block']//h4/a";
        this.addtocartbtn="//a[@class='btn btn-success btn-lg']";

    }

    async HomepageNaviagtion(){
    await this.page.locator(this.homelink).click();

}

async LaptopNavigation(){
       await this.page.locator(this.laptoplink).click();
}

async addProductToCart(ProductName){
    const laptoplist = await this.page.$$(this.laptoplist);
    for(const product of laptoplist){
        if(ProductName == await product.textContent()){
            await product.click();
            break;
        }
    }
    await this.page.on('dialog', async dialog =>{
        if(dialog.message().includes('added')){
            await dialog.accept();
        }
    })
    await this.page.locator(this.addtocartbtn).click();
}
}



