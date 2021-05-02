import {​​​​​​​​ ElementFinder,element,by }​​​​​​​​ from"protractor";
 
export class angularHomePage {
    ​​​​​​​​
angularLink:ElementFinder;
search:ElementFinder;
 login=element(by.xpath(""));
 
constructor()
{​​​​​​​​
this.angularLink=element(by.linkText("angular.io"));
this.search=element(by.css("input[type='search']"));
}​​​​​​​​

// browser.get("https://angularjs.org/");

async clickAngularLink(){
   await this.angularLink.click();
}


async clicksearch(searchValue:string){
    await this.search.sendKeys(searchValue);
}
}​​​​​​​​

