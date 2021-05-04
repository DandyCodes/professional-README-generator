const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js');

const questions = [
    'Title: ',
    'Description: ',
    'Installation: ',
    'Usage: ',
    'License: ',
    'Contributing: ',
    'Tests: ',
    'Questions: '
];
const answers = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
