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
exports.angularHomePage = void 0;
const protractor_1 = require("protractor");
class angularHomePage {
    constructor() {
        this.angularLink = protractor_1.element(protractor_1.by.linkText("angular.io"));
        this.search = protractor_1.element(protractor_1.by.css("input[type='search']"));
    }
    clickAngularLink() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.angularLink.click();
            let alert = yield protractor_1.browser.switchTo().alert();
            yield alert.accept();
        });
    }
    clicksearch(searchValue) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.search.sendKeys(searchValue);
        });
    }
}
exports.angularHomePage = angularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvc2FtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE4RTtBQUc5RSxNQUFhLGVBQWU7SUFLNUI7UUFFQSxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBSUssZ0JBQWdCOztZQUNuQixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsSUFBSSxLQUFLLEdBQVMsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25ELE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLENBQUM7S0FBQTtJQUdLLFdBQVcsQ0FBQyxXQUFrQjs7WUFDaEMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7Q0FDQTtBQXZCRCwwQ0F1QkMifQ==