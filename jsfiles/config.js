"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
    },
    specs: [
        '../features/sample.feature'
    ],
    cucumberOpts: {
        require: ['./stepDefinitions/*.js'],
        format: 'json:./cucumberReports.json',
    },
    onPrepare: () => {
        protractor_1.browser.waitForAngularEnabled(false);
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberReports.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFDN0MsaUVBQW1EO0FBRXRDLFFBQUEsTUFBTSxHQUFXO0lBRTFCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELGVBQWUsRUFBQyw4QkFBOEI7SUFDOUMsYUFBYSxFQUFDLElBQUk7SUFDbEIsWUFBWSxFQUFDO1FBRUwsV0FBVyxFQUFDLFFBQVE7S0FFM0I7SUFHRCxLQUFLLEVBQUU7UUFFQyw0QkFBNEI7S0FFM0I7SUFJVCxZQUFZLEVBQUM7UUFHVCxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUVuQyxNQUFNLEVBQUMsNkJBQTZCO0tBRXZDO0lBRUQsU0FBUyxFQUFDLEdBQUUsRUFBRTtRQUNOLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFVBQVUsRUFBQyxHQUFFLEVBQUU7UUFFWCxJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxXQUFvQjtZQUMzQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBRWxCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRy9CLENBQUM7Q0FJSixDQUFBIn0=