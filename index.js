// Necessary packages for application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown  = require('./utils/generateMarkdown');
const generateReadme = require("./utils/generateReadme")

// What questions we are going to ask for readme
function askQuestions() {
  return inquirer.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project'
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license are you using for this project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What installation packages are necessary?',
        default: 'npm i'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What info should other developers know about contributing to your project?'
      }
    ]);
} 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const data = askQuestions();
  const newContent = ('./utils/README.md', newContent)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(inquirerResponses => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
