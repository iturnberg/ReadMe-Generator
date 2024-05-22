// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input", 
    name: "contributionGuidelines",
    message: "What are the contribution guidelines for your project?",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "What are the test instructions for your project?",
  },
  {
    type: "input",
    name: "usageInformation",
    message: "What is the usage information for your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license is your project under?",
    choices: ['MIT', 'GPL'], //add to this as needed
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
  });
}

// Function call to initialize app
init();