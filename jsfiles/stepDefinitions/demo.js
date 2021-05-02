"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const calc_1 = require("../pageObjects/calc");
const commonPage_1 = require("../pageObjects/commonPage");
let calc = new calc_1.calculator();
let angu = new angularHomePage_1.angularHomePage();
let common = new commonPage_1.commonPage();
cucumber_1.When('adding two numbers {string} and {string}', function (string1, string2) {
    return __awaiter(this, void 0, void 0, function* () {
        yield calc.enterValue(string1, string2);
    });
});
cucumber_1.Then('output displayed should be {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let text = yield calc.getResult.getText();
        chai_1.expect(text).to.equal(string);
    });
});
cucumber_1.Given('navigate to {string} page', function (application) {
    return __awaiter(this, void 0, void 0, function* () {
        yield common.browserLaunch(application);
    });
});
cucumber_1.When('clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield angu.clickAngularLink();
}));
cucumber_1.When('will navigate to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("F****");
}));
cucumber_1.Then('enter {string} in search box', function (searchValue) {
    return __awaiter(this, void 0, void 0, function* () {
        yield angu.clicksearch(searchValue);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLHVDQUEyQztBQUUzQyxvRUFBaUU7QUFDakUsOENBQWlEO0FBQ2pELDBEQUF1RDtBQUl2RCxJQUFJLElBQUksR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQVkxQixlQUFJLENBQUMsMENBQTBDLEVBQUUsVUFBZSxPQUFPLEVBQUUsT0FBTzs7UUFDNUUsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztJQUszQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHFDQUFxQyxFQUFFLFVBQWUsTUFBTTs7UUFHOUQsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFJSCxnQkFBSyxDQUFDLDJCQUEyQixFQUFFLFVBQWUsV0FBVzs7UUFDMUQsTUFBTSxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsd0JBQXdCLEVBQUMsR0FBUSxFQUFFO0lBQ3RDLE1BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFFakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBQyxHQUFRLEVBQUU7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDhCQUE4QixFQUFDLFVBQWUsV0FBVzs7UUFDMUQsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==