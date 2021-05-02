import { browser, Config } from "protractor";
import * as reporter from "cucumber-html-reporter";

export const config: Config = {

    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    seleniumAddress:'http://localhost:4444/wd/hub',
    directConnect:true,
    capabilities:{

            browserName:'chrome',

    },

    // Feature file path
    specs: [
            // '../features/demo.feature',
            '../features/sample.feature' 

            ],


    
    cucumberOpts:{

        // step definition path
        require: ['./stepDefinitions/*.js'],
        // tags: ['not @smoke and not @Regression']
        format:'json:./cucumberReports.json',

    },

    onPrepare:()=>{
            browser.waitForAngularEnabled(false);
    },

    onComplete:()=>{

        var options = {
            theme: 'bootstrap' as const,
            jsonFile: './cucumberReports.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            // storeScreenshots:true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
    
        reporter.generate(options);
        

    }



}
