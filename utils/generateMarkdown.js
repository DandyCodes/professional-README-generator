function getLicenseColor(license) {
  return license.startsWith('MIT') ? 'yellow' :
    license.startsWith('GPL-3.0') ? 'blue' :
    license.startsWith('Apache') ? 'yellowgreen' :
    license.startsWith('BSD') ? 'orange' :
    'light-grey';
}

function markdownBadge(license) {
  const test = license.replace('-', '%20').replace('-', '--');
  console.log(test);
  return test;
}

function getBadge(license) {
  return `https://img.shields.io/badge/License-${markdownBadge(license)}-${getLicenseColor(license)}.svg`;
}

function getRenderedLicense(license) {
  if (license === 'None') return 'None';
  return `[![License](${getBadge(license)})](https://opensource.org/licenses/${license})`;
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
Clone repo then run this command within the repo directory:

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

module.exports = generateMarkdown;

const examples = [
  'Title: ',
  'Description: ',
  'Installation: ',
  'Usage: ',
  'License: ',
  'Contributing: ',
  'Tests: ',
  'Questions: '
];