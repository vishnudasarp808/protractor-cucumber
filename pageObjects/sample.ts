import {​​​​​​​​ browser, ElementFinder,element,by }​​​​​​​​ from"protractor";
import { Alert } from 'selenium-webdriver';
 
export class angularHomePage {
    ​​​​​​​​
angularLink:ElementFinder;
search:ElementFinder;
 
constructor()
{​​​​​​​​
this.angularLink=element(by.linkText("angular.io"));
this.search=element(by.css("input[type='search']"));
}​​​​​​​​

// browser.get("https://angularjs.org/");

async clickAngularLink(){
   await this.angularLink.click();
   let alert:Alert = await browser.switchTo().alert();
   await alert.accept();
}


async clicksearch(searchValue:string){
    await this.search.sendKeys(searchValue);
}
}​​​​​​​​

