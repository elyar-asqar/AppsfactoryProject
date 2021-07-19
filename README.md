**Automation Practice UI Tests (Cucumber)**

This is automation suite designed to test the AutomationPractice.

Selenium & Java based UI automation suite utilising the BDD methodologies of Cucumber and Gherkin.

Before run the test cases make sure you have Java ( 1.8 or higher ) and Maven installed on your system.
Important: This suite should work on both windows and mac platforms however has only been tested on a windows. If possible please use a windows to execute the test suite



**Set Path Variables**

User Variable Path = directory for java sdk 8 Set Maven home in environment Variables

**For Windows**

Create the following System variables

- JAVA_HOME = PAth to java sdk
- M2_HOME = Path to maven installation
- MAVEN_HOME = Path to maven installation
- Add %M2_HOME%\bin


###Tools & Dependencies

Cucumber ( version 6.10.1 )

Cucumber - Junit ( 6.10.1 )

WebDriverManager ( 4.0.0 )

Selenium ( 3.141.59 )

Maven ( 3.6.3 )

Maven-Surefire-plugin ( 2.22.2 )

Maven-Cucumber-reporting ( 5.0.0 )

Cucumber HTML Reports

Gherkin Language

IntelliJ (IDE) ( 2020.3.2 )

Java ( 11 )

**Framework Structure**

Test Run class:

src/test/java/com/automationpractice/runner/CukesRunner.java

CukesRunner class - Control running the test suit

**Test step definitions:**

src/test/java/com/automationpractice/stepDefinitions


Step Definition Feature File - Java class whereby the steps from the feature files are broken down to be coded into automation tests

Hooks class - @Before, @After method and screen shoot.

**Test Scenarios:**

src/test/resources/features

Feature File - The feature file specifies the steps in BDD language style

**Utilities:**

src/test/java/com/automationpractice/utilities

ConfigurationReader class - Gets important credential and parameters from the configuration file.

Driver class - Setup WebDriver.

**Dependency & Plugin:**

automationpractice/pom.xml

Manage dependencies and plugins.

**Important Credential:**

automationpractice/configuration.properties

Store important credentials and parameters.

**Running Tests from project**

In order to execute the automation suite navigate to the Project directory automationpractice/ within Terminal Mac/CMD window and run one of the commands below:

**mvn clean verify**

mvn clean verify -Dcucumber.options="--tags @smoke" ( change tags( @xxx ) name based on feature files/scenario runs deifferent test case )   ...

####Or Running Tests

CukesRunner class

feature file ( execute each scenario separately)

mvn verify ( get html reports)

**Reporting on project**

Tests result in HTML report for each feature in automationpractice/target/cucumber-html-reports.

After the test execution you can find HTML Test Reports under automationpractice/target/cucumber-html-reports folder and open one of them on any browser.