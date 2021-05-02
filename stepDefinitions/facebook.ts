import {Given, When, Then, TableDefinition } from "cucumber";
import { browser } from "protractor";
import { facebook } from "../pageObjects/facebookPage";

let fb = new facebook();

Given('navigate to facebook page',async ()=>{
    await browser.get("https://www.facebook.com")
    await browser.waitForAngularEnabled(false);
    });
    
   When('user click on create new account',async ()=>{
    await fb.createAccount.click();
    await browser.sleep(5000)
  });

  When('user enter the details',async (table:TableDefinition)=>{
    let rows = await table.rowsHash();
    console.log(rows.Field);

    await fb.firstName.sendKeys(rows.FirstName);
    await browser.sleep(2000)
    await fb.lastName.sendKeys(rows.LastName);
    await browser.sleep(2000)
    await fb.Mobile_Email.sendKeys(rows.MobNumber);
    await browser.sleep(2000)
    await fb.pwd.sendKeys(rows.Passward);
    await browser.sleep(2000)
    await fb.gender.click();
    await browser.sleep(2000)
    await fb.signup.click();
    await browser.sleep(2000)
    });


    When('user enter the details - Hashes',async (table:TableDefinition)=>{
        let rows = await table.raw();

        rows.forEach(async function(row) {
            console.log(row);
            // await fb.firstName.sendKeys(rows.FirstName);
        });

    });
        
        When('user enter the details - rows',async (table:TableDefinition)=>{
            let rows = await table.rows();
    
            rows.forEach(async function(row) {
                console.log(row[1]);
                // await fb.firstName.sendKeys(rows.FirstName);
            });
        
        // await fb.firstName.sendKeys(rows.FirstName);
        // await browser.sleep(2000)
        // await fb.lastName.sendKeys(rows.LastName);
        // await browser.sleep(2000)
        // await fb.Mobile_Email.sendKeys(rows.MobNumber);
        // await browser.sleep(2000)
        // await fb.pwd.sendKeys(rows.Passward);
        // await browser.sleep(2000)
        // await fb.gender.click();
        // await browser.sleep(2000)
        // await fb.signup.click();
        // await browser.sleep(2000)
        });

  