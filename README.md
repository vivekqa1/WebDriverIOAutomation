**What is WebdriverIO**

Automation testing framework for browser and mobile testing
Free & Open-source
owned by a non-profit entity called OpenJS Foundation

**Features**

We can use WebdriverIO to automate:

🌐   modern web applications written in React, Vue, Angular etc

📱   hybrid or native mobile apps running on emulator/simulator or real device

💻   native desktop applications (e.g. written with Electron.js)

Can work with Shadow DOM and React Objects

**Project Setup & WebdriverIO Installation**

Step 1 - Create a new folder and open in IDE (VS Code)

Step 2 - Open terminal in VS Code and run commands  npm init -y

               npm init wdio
Step 3 - Select the options as required and install

Step 4 - Check WebdriverIO version  npm ls webdriverio

Step 5 - Check wdio.conf.js file and project folders are created

Step 6 - To run existing tests

Run all tests in the folder configured in wdio.conf.js

            npx wdio run wdio.conf.js

or

          npm run wdio

Run specific tests npx wdio run wdio.conf.js --spec test1.js 


**How to Generate and View Reports**

Step 1 - Run - npm install @wdio/allure-reporter --save-dev

Step 2 - Add reporter config in wdio.conf.js

Step 3 - Run a test and check Allure Results folder is generated

Step 4 - Install allure command line tool  npm install -g allure-commandline --save-dev

Step 5 - Run commands

 allure generate allure-results //This will generate allure-report folder
 
 allure open     // will start the server and open the report

 **Run WebdriverIO Tests from Jenkins**
 
 Step 1 - Download, set up, and start Jenkins
 
 Step 2 - Add JUnit Reporter extension in WebdriverIO Project - npm install @wdio/junit-reporter --save-dev
 
 Step 3 - Update configuration file to add junit reporter configuration
 
 Step 4 - Open Jenkins and create a new job
 
 Step 5 - In the Build section add a command to run webdriverio tests
 
 Step 6 - In the Post Build Actions add an option to Publish JUnit test result report
 
 Step 7 - Run the job and check the results

 
