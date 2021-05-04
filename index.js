const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        message: 'What is the name of the author?',
        name: 'author',
    },
    {
        type: 'input',
        message: 'What is the email address of the author?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command installs dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How does one use this repo?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'license',
        choices: ['MIT', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'Apache-2.0', 'None']
    },
    {
        type: 'input',
        message: 'How can people contribute to this repo?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What command runs tests?',
        name: 'tests',
    },
]

function writeToFile(path, data) {
    fs.writeFile(path, data, error => console.log(error ? error : 'Generating README...'));
}

function init() {
    inquirer.prompt(questions).then(
        answers => writeToFile('./newlyGeneratedREADME.md', generateMarkdown(answers))
    );
}

init();
