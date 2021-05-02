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
const facebookPage_1 = require("../pageObjects/facebookPage");
let fb = new facebookPage_1.facebook();
cucumber_1.Given('navigate to facebook page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://www.facebook.com");
    yield protractor_1.browser.waitForAngularEnabled(false);
}));
cucumber_1.When('user click on create new account', () => __awaiter(void 0, void 0, void 0, function* () {
    yield fb.createAccount.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('user enter the details', (table) => __awaiter(void 0, void 0, void 0, function* () {
    let rows = yield table.rowsHash();
    console.log(rows.Field);
    yield fb.firstName.sendKeys(rows.FirstName);
    yield protractor_1.browser.sleep(2000);
    yield fb.lastName.sendKeys(rows.LastName);
    yield protractor_1.browser.sleep(2000);
    yield fb.Mobile_Email.sendKeys(rows.MobNumber);
    yield protractor_1.browser.sleep(2000);
    yield fb.pwd.sendKeys(rows.Passward);
    yield protractor_1.browser.sleep(2000);
    yield fb.gender.click();
    yield protractor_1.browser.sleep(2000);
    yield fb.signup.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('user enter the details - Hashes', (table) => __awaiter(void 0, void 0, void 0, function* () {
    let rows = yield table.raw();
    rows.forEach(function (row) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(row);
        });
    });
}));
cucumber_1.When('user enter the details - rows', (table) => __awaiter(void 0, void 0, void 0, function* () {
    let rows = yield table.rows();
    rows.forEach(function (row) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(row[1]);
        });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvZmFjZWJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkQ7QUFDN0QsMkNBQXFDO0FBQ3JDLDhEQUF1RDtBQUV2RCxJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFRLEVBQUUsQ0FBQztBQUV4QixnQkFBSyxDQUFDLDJCQUEyQixFQUFDLEdBQVEsRUFBRTtJQUN4QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUE7SUFDN0MsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSixlQUFJLENBQUMsa0NBQWtDLEVBQUMsR0FBUSxFQUFFO0lBQ2pELE1BQU0sRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsd0JBQXdCLEVBQUMsQ0FBTyxLQUFxQixFQUFDLEVBQUU7SUFDM0QsSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEIsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QixNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pCLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDekIsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLGlDQUFpQyxFQUFDLENBQU8sS0FBcUIsRUFBQyxFQUFFO0lBQ2xFLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTdCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBZSxHQUFHOztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUMsZUFBSSxDQUFDLCtCQUErQixFQUFDLENBQU8sS0FBcUIsRUFBQyxFQUFFO0lBQ2hFLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRTlCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBZSxHQUFHOztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLENBQUM7S0FBQSxDQUFDLENBQUM7QUFjUCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=