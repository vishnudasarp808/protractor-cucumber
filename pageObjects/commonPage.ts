import { browser } from "protractor";

export class commonPage {

    async browserLaunch(value:string){
        if(value == "AngularJs"){
            await browser.get("https://angularjs.org/");
            }else if(value == "calculator"){
                await browser.get("http://juliemr.github.io/protractor-demo/"); 
            }
    }

}