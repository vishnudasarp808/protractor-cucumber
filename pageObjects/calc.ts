import { ElementFinder, element, by, browser } from "protractor";
// import {chai} from "chai";
import chai from "chai";

import { calculatorData } from "../testData/calculatorData";

let expect = chai.expect;
export class calculator {
    firstEditBox: ElementFinder;
    secondEditBox: ElementFinder;
    go: ElementFinder;
    getResult: ElementFinder;

    constructor() {
        this.firstEditBox = element(by.model("first"));
        this.secondEditBox = element(by.model("second"));
        this.go = element(by.id("gobutton"));
        this.getResult = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    }

    async enterValue(value1:string, value2:string){
        await this.firstEditBox.sendKeys(value1);
        await this.secondEditBox.sendKeys(value2);
        await this.go.click();
    }

    async validateOutput(){
        let text = await this.getResult.getText();
        expect(text).to.equal(calculatorData.expectedValue);
    }
}​​​​​
