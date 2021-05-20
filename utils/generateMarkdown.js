function getBadgeColor(license) {
  return license.startsWith("MIT")
    ? "yellow"
    : license.startsWith("GPL")
    ? "blue"
    : license.startsWith("Apache")
    ? "yellowgreen"
    : license.startsWith("BSD")
    ? "orange"
    : "light-grey";
}

function getBadgePath(license) {
  return `badge/License-${license.replace("-", "%20").replace("-", "--")}`;
}

function getBadgeURL(license) {
  return `https://img.shields.io/${getBadgePath(license)}-${getBadgeColor(
    license
  )}.svg`;
}

function getLicenseURL(license) {
  return `https://opensource.org/licenses/${license}`;
}

function getRenderedLicense(license) {
  if (license === "None") return "None";
  return `[![License](${getBadgeURL(license)})](${getLicenseURL(license)})`;
}

function generateMarkdown(answers) {
  return `# ${answers.title}
${getRenderedLicense(answers.license)}
## Description:
${answers.description}

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation
Clone the repo then run this command within the repo directory:

\`\`\`${answers.installation}\`\`\`

### Usage
${answers.usage}

### License
This repository is licensed under the [${answers.license}](${getLicenseURL(
    answers.license
  )}) license.

### Contributing
${answers.contributing}

### Tests
Run this command within the repo directory:

\`\`\`${answers.tests}\`\`\`

### Questions
If you have any questions, head to my [GitHub](https://github.com/${
    answers.github
  }) or send me an email at ${answers.email}.`;
}

module.exports = generateMarkdown;
