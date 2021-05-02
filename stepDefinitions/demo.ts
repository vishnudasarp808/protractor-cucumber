import { expect } from "chai";
import {Given, When, Then} from "cucumber";
import { browser, by, element } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import { calculator } from "../pageObjects/calc";
import { commonPage } from "../pageObjects/commonPage";
import {Before,After} from "cucumber";


let calc = new calculator();
let angu = new angularHomePage();
let common = new commonPage();

    // Given('navigate to calculator', async function(){
    //     await browser.get("http://juliemr.github.io/protractor-demo/");
    
    // });

    // Before(function (){

    //     console.log("Non Angular");
    // });

    When('adding two numbers {string} and {string}', async function(string1, string2){
        await calc.enterValue(string1,string2);
        // await console.log("strings " +string1, +string2)
        // await calc.firstEditBox.sendKeys(string1);
        // await calc.secondEditBox.sendKeys(string2);
        // await calc.go.click();
    });

    Then('output displayed should be {string}', async function(string){
    //    await calc.validateOutput();

       let text = await calc.getResult.getText();
        expect(text).to.equal(string);
    });


    
    Given('navigate to {string} page', async function(application){
       await common.browserLaunch(application);
    });


    When('clicked on header link',async ()=>{
      await  angu.clickAngularLink();

    });

    When('will navigate to angular page',async ()=>{
        console.log("F****")
    });

    
    Then('enter {string} in search box',async function(searchValue){
        await angu.clicksearch(searchValue)
    });
