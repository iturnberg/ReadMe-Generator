function generateTitleSection(title) {
  return `# ${title}

`;
}

function generateDescriptionSection(description) {
  return `## Description

${description}

`;
}

function renderLicenseLink(license) {
  if (!license) return "";
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    // Add more license cases as needed
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  if (!license) return "";
  return `## License

[ License: ${license} ](${renderLicenseLink(license)})
`;
}

function renderLicenseBadge(license) {
  if (!license) return "";
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GPL":
      return "[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)";
    // Add more license cases as needed
    default:
      return "";
  }
}

function generateInstallationSection(installation) {
  return `## Installation

${installation}

`;
}

function generateContributingSection(contributionGuidelines) {
  return `## Contributing

${contributionGuidelines}

`;
}

function generateUsageSection(usageInformation) {
  return `## Usage

${usageInformation}

`;
}

function generateTestsSection(testInstructions) {
  return `## Tests

${testInstructions}

`;
}

function generateQuestionsSection(githubUsername, email) {
  return `## Questions

If you have any questions, please contact me at:

- GitHub: [${githubUsername}](https://github.com/${githubUsername})
- Email: ${email}

`;
}

function generateMarkdown(data) {
  return `${generateTitleSection(data.title)}
${generateDescriptionSection(data.description)}
${generateInstallationSection(data.installation)}
${generateUsageSection(data.usageInformation)}
${generateContributingSection(data.contributionGuidelines)}
${generateTestsSection(data.testInstructions)}
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${generateQuestionsSection(data.githubUsername, data.email)}`;
}
module.exports = generateMarkdown;