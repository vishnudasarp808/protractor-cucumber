import { ElementFinder,element,by } from "protractor";
 
export class facebook
{
 
 firstName =element(by.xpath("//input[@placeholder='First name']"))
 lastName = element(by.xpath("//input[@name='lastname']"))
 Mobile_Email = element(by.xpath("//input[@name='reg_email__']"))
 pwd = element(by.id("password_step_input"))
 gender = element(by.xpath("//span/label[contains(text(),'Female')]"))
 signup = element(by.xpath("//button[@name='websubmit']"))
createAccount =  element(by.xpath("//div/a[text()='Create New Account']"))
 
}