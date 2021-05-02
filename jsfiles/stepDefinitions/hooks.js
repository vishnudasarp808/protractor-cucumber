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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    console.log("Non Angular");
});
cucumber_1.Before('@smoke', function () {
    console.log("Smokeeeeeeeeeeeeeee");
    protractor_1.browser.manage().window().maximize();
    console.log("maximized");
});
cucumber_1.Before('@smoke and @Regression', function () {
    console.log("both");
    console.log("maximized");
});
cucumber_1.Before('@smoke or @Regression', function () {
    console.log("or");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("will get executed after each scenarios");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
cucumber_1.After('@sanity', function () {
    console.log("will get executed after each sanity scenarios");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBOEM7QUFFOUMsMkNBQXFDO0FBR3JDLGlCQUFNLENBQUM7SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDO0FBR0gsaUJBQU0sQ0FBQyxRQUFRLEVBQUU7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDO0FBR0gsaUJBQU0sQ0FBQyx3QkFBd0IsRUFBRTtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLHVCQUF1QixFQUFFO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLFVBQWdCLFFBQVE7O1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUN0RCxJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFHLGlCQUFNLENBQUMsTUFBTSxFQUFDO1lBQzFDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLFNBQVMsRUFBRTtJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMsQ0FBQyJ9