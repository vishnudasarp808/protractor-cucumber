Feature: Validating Calculator App

# @smoke
#     Scenario Outline: add funcionality testing
#         Given navigate to "calculator" page
#         When adding two numbers "<key1>" and "<key2>"
#         Then output displayed should be "<key3>"
#         Examples:
#             | key1 | key2 | key3 |
#             | 10   | 8    | 18   |
#             | 3    | 5    | 8    |
#             | 1    | 8    | 15    |
#             | 0    | 8    | 15    |

# @FacebookSignupTesting
# Scenario: signup funcionality testing
# Given navigate to facebook page
# When user click on create new account
# And user enter the details
# |Field|Value|
# |FirstName|anu|
# |LastName|R|
# |MobNumber|1234567895|
# |Passward|XYZXYZ|



@FacebookSignupTesting
Scenario: signup funcionality testing
Given navigate to facebook page
When user click on create new account
And user enter the details - Hashes
|FirstName|LastName|MobileNumber|Pwd|
|stupid|F***|999999|koomutta|
|pudis|A***|123456|muttakoo|
|anu|F***|852|koomutta|
|great|F***|123456|great|
