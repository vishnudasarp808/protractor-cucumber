Feature: Validating Calculator App

    @smoke
    Scenario Outline: add funcionality testing
        Given navigate to "calculator" page
        When adding two numbers "<key1>" and "<key2>"
        Then output displayed should be "<key3>"
        Examples:
            | key1 | key2 | key3 |
            | 10   | 8    | 18   |
            | 3    | 5    | 8    |
            | 1    | 8    | 15    |
            | 0    | 8    | 15    |


@smoke
    Scenario Outline: Validate Login
        Given navigate to "login" page
        When Enter  "<username>" and "<password>"
        Then user is logged in, with title "<title>"
        Examples:
            | username | password | title |
            | vishnu_888   | password1234    | logged in   |

@sanity
    Scenario Outline: add funcionality testing
        Given navigate to "calculator" page
        When adding two numbers "<key1>" and "<key2>"
        Then output displayed should be "<key3>"
        Examples:
            | key1 | key2 | key3 |e5t
            | 10   | 8    | 18   |
            | 3    | 5    | 8    |
            | 1    | 8    | 9    |
            | 0    | 8    | 8    |

    # Scenario: add funcionality testing
    # Given navigate to calculator
    # When adding two numbers "3" and "5"
    # Then output displayed should be "8"
    @Regression
    Scenario Outline: Angualar validations

        Given navigate to "AngularJs" page
        When clicked on header link
        And will navigate to angular page
        Then enter "<key>" in search box
        Examples:
            | key   |
            | hello |
            | hey   |


@Regression @smoke

    Scenario Outline: Angualar validations

        Given navigate to "AngularJs" page
        When clicked on header link
        And will navigate to angular page
        Then enter "<key>" in search box
        Examples:
            | key   |
            | vishnu |
            | Great   |


@sanity

    Scenario Outline: Angualar validations

        Given navigate to "AngularJs" page
        When clicked on header link
        And will navigate to angular page
        Then enter "<key>" in search box
        Examples:
            | key   |
            | EIP |
            | Phoenix   |