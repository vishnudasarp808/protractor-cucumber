import {Before,After, Status} from "cucumber";
import { STATUS_CODES } from "http";
import { browser } from "protractor";
import { AttachSession } from "protractor/built/driverProviders";

Before(function (){
    console.log("Non Angular");
});


Before('@smoke', function (){
    console.log("Smokeeeeeeeeeeeeeee");
    browser.manage().window().maximize();
    console.log("maximized");
});


Before('@smoke and @Regression', function (){
    console.log("both");
    // browser.manage().window().maximize();
    console.log("maximized");
});

Before('@smoke or @Regression', function (){
    console.log("or");
});

After(async function (scenario){
    console.log("will get executed after each scenarios");
    if(scenario.result.status===Status.FAILED){
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot,"image/png");
    }
});

After('@sanity', function (){
    console.log("will get executed after each sanity scenarios");
});