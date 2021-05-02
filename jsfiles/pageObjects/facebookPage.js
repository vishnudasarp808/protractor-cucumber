"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebook = void 0;
const protractor_1 = require("protractor");
class facebook {
    constructor() {
        this.firstName = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='First name']"));
        this.lastName = protractor_1.element(protractor_1.by.xpath("//input[@name='lastname']"));
        this.Mobile_Email = protractor_1.element(protractor_1.by.xpath("//input[@name='reg_email__']"));
        this.pwd = protractor_1.element(protractor_1.by.id("password_step_input"));
        this.gender = protractor_1.element(protractor_1.by.xpath("//span/label[contains(text(),'Female')]"));
        this.signup = protractor_1.element(protractor_1.by.xpath("//button[@name='websubmit']"));
        this.createAccount = protractor_1.element(protractor_1.by.xpath("//div/a[text()='Create New Account']"));
    }
}
exports.facebook = facebook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2tQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvZmFjZWJvb2tQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLFFBQVE7SUFBckI7UUFHQyxjQUFTLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQTtRQUNsRSxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQTtRQUN6RCxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7UUFDaEUsUUFBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7UUFDM0MsV0FBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUE7UUFDckUsV0FBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7UUFDMUQsa0JBQWEsR0FBSSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFBO0lBRTFFLENBQUM7Q0FBQTtBQVhELDRCQVdDIn0=