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
exports.commonPage = void 0;
const protractor_1 = require("protractor");
class commonPage {
    browserLaunch(value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (value == "AngularJs") {
                yield protractor_1.browser.get("https://angularjs.org/");
            }
            else if (value == "calculator") {
                yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
            }
        });
    }
}
exports.commonPage = commonPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NvbW1vblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBRXJDLE1BQWEsVUFBVTtJQUViLGFBQWEsQ0FBQyxLQUFZOztZQUM1QixJQUFHLEtBQUssSUFBSSxXQUFXLEVBQUM7Z0JBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUMzQztpQkFBSyxJQUFHLEtBQUssSUFBSSxZQUFZLEVBQUM7Z0JBQzNCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQzthQUNsRTtRQUNULENBQUM7S0FBQTtDQUVKO0FBVkQsZ0NBVUMifQ==