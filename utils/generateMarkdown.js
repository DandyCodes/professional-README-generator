module.exports = generateMarkdown;

function getBadgeColor(license) {
  return license.startsWith('MIT') ? 'yellow' :
    license.startsWith('GPL-3.0') ? 'blue' :
    license.startsWith('Apache') ? 'yellowgreen' :
    license.startsWith('BSD') ? 'orange' :
    'light-grey';
}

function getBadgePath(license) {
  return `License-${license.replace('-', '%20').replace('-', '--')}`;
}

function getBadgeURL(license) {
  return `https://img.shields.io/badge/${getBadgePath(license)}-${getBadgeColor(license)}.svg`;
}

function getRenderedLicense(license) {
  if (license === 'None') return 'None';
  return `[![License](${getBadgeURL(license)})](https://opensource.org/licenses/${license})`;
}

function generateMarkdown(answers) {
  return `# ${answers.title}

${answers.description}

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation
Clone the repo then run this command within the repo directory from the command line:

\`\`\`${answers.installation}\`\`\`

### Usage
${answers.usage}

### License
${getRenderedLicense(answers.license)}

### Contributing
${answers.contributing}

### Tests
Run this command within the repo directory:

\`\`\`${answers.tests}\`\`\`

### Questions
If you have any questions, send me an email: ${answers.email}
`;
}
