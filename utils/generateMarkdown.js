// returns license badge based on license, else returns empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
    return "";
  }

// returns link for license, else empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License
    This application is covered under the ${license} license.`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
  
## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}
  
## Contributing
${data.contributing}

## Tests

To run tests, run ${data.test} !!

## Questions

If you have any questions, please email ${data.email}. Other works can be found at [${data.github}](https://github.com/${data.github}/). Please view the video walkthrough in the root directory for a demonstration on how to use this application!

`;
}

module.exports = generateMarkdown;