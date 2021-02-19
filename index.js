const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const writeFileAsync = util.promisify(fs.writeFile);

const licenseLinks = [
  "http://unlicense.org/",
  "https://opensource.org/licenses/Apache-2.0",
  "https://www.boost.org/LICENSE_1_0.txt",
  "https://opensource.org/licenses/BSD-3-Clause",
  "https://opensource.org/licenses/BSD-2-Clause",
  "http://creativecommons.org/publicdomain/zero/1.0",
  "https://creativecommons.org/licenses/by/4.0/",
  "https://creativecommons.org/licenses/by-sa/4.0/",
  "https://creativecommons.org/licenses/by-nc/4.0/",
  "https://creativecommons.org/licenses/by-nd/4.0/",
  "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  "https://opensource.org/licenses/EPL-1.0",
  "https://www.gnu.org/licenses/gpl-3.0",
  "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  "https://www.gnu.org/licenses/agpl-3.0",
  "https://www.gnu.org/licenses/lgpl-3.0",
  "https://www.gnu.org/licenses/fdl-1.3",
  "https://opensource.org/licenses/IPL-1.0",
  "https://opensource.org/licenses/ISC",
  "https://opensource.org/licenses/MIT",
  "https://opensource.org/licenses/MPL-2.0",
  "https://opendatacommons.org/licenses/by/",
  "https://opendatacommons.org/licenses/odbl/",
  "https://opendatacommons.org/licenses/pddl/",
  "https://opensource.org/licenses/Artistic-2.0",
  "https://opensource.org/licenses/Artistic-2.0",
  "https://opensource.org/licenses/OFL-1.1",
  "https://opensource.org/licenses/Zlib",
];

const badgeLicenseKeys = [
  "Unlicense-blue.svg",
  "Apache%202.0-blue.svg",
  "Boost%201.0-lightblue.svg",
  "BSD%203--Clause-blue.svg",
  "BSD%202--Clause-orange.svg",
  "CC0%201.0-lightgrey.svg",
  "CC%20BY%204.0-lightgrey.svg",
  "CC%20BY--SA%204.0-lightgrey.svg",
  "CC%20BY--NC%204.0-lightgrey.svg",
  "CC%20BY--ND%204.0-lightgrey.svg",
  "CC%20BY--NC--SA%204.0-lightgrey.svg",
  "CC%20BY--NC--ND%204.0-lightgrey.svg",
  "EPL%201.0-red.svg",
  "GPLv3-blue.svg",
  "GPL%20v2-blue.svg",
  "AGPL%20v3-blue.svg",
  "LGPL%20v3-blue.svg",
  "FDL%20v1.3-blue.svg",
  "IPL%201.0-blue.svg",
  "ISC-blue.svg",
  "MIT-yellow.svg",
  "MPL%202.0-brightgreen.svg",
  "ODC_BY-brightgreen.svg",
  "ODbL-brightgreen.svg",
  "PDDL-brightgreen.svg",
  "Perl-0298c3.svg",
  "Artistic%202.0-0298c3.svg",
  "OFL%201.1-lightgreen.svg",
  "Zlib-lightgrey.svg",
];

const licenses = [
  "The Unlicence",
  "Apache 2.0 License",
  "Boost Software License 1.0",
  "BSD 3-Clause License	",
  "BSD 2-Clause License",
  "CC0",
  "Attribution 4.0 International",
  "Attribution-ShareAlike 4.0 International",
  "Attribution-NonCommercial 4.0 International",
  "Attribution-NoDerivates 4.0 International",
  "Attribution-NonCommmercial-ShareAlike 4.0 International",
  "Attribution-NonCommercial-NoDerivatives 4.0 International",
  "Eclipse Public License 1.0",
  "GNU GPL v3	",
  "GNU GPL v2",
  "GNU AGPL v3",
  "GNU LGPL v3	",
  "GNU FDL v1.3",
  "IBM Public License Version 1.0",
  "ISC License (ISC)",
  "The MIT License",
  "Mozilla Public License 2.0",
  "Attribution License (BY)",
  "Open Database License (ODbL)",
  "Public Domain Dedication and License (PDDL)",
  "The Perl License",
  "The Artistic License 2.0",
  "SIL Open Font License 1.1",
  "Zlib",
];

//Gathers the information about the project from the user by asking questions.
const askUser = () => 
  inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your Github username?"
    },
    { type: "input",
      name: "email",
      message: "What is your Email address?"
    },
    { 
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "How can you describe your project?"
    },
    {
      type: "input",
      name: "installation",
      message: "How to install yur application?",
      default: 'npm i',
    }, 
    {
      type: "input",
      name: "usage",
      message: "How to use your application?"
    },
    { 
      type: "input",
      name: "license",
      message: "Chose the appropriate license for your project?",
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: "input",
      name: "contribution",
      message: "How can the user contribute to your project?"
    }, 
    {
      type: "input",
      name: "test",
      message: "How can the user test your application?",
      default: 'npm test',
    },
    { 
      type: "input",
      name: "questions",
      message: "How can the user contact you for questions?"
    }
    
  ]);

//Returns license badge
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

//Returns license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

//Returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}


// Generate the Readme file in the generate-readme folder.
const generateReadme = (answers) => {
  return ` # ${answers.title}
  ${renderLicenseBadge(answers.license)}

  ## Description

  ${answers.description}

  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)

  * ${renderLicenseLink(answers.license)}
  
  * [Contributing](#contribution)
  
  * [Test](#test)
  
  * [Questions](#questions)
  
  ## Installation 
  
  To install necessary dependencies, run the following command:
  \`\`\`
  ${answers.installation}
  \`\`\`
  
  ## Usage

  ${answers.usage}

  ${renderLicenseSection(answers.license)}
  
  ## Contribution
  
  ${answers.contribution}
  
  ## Test
  
  To run tests, write the following command:
  \`\`\`
  ${answers.test}
  \`\`\`
  ## Questions

  If you have any questions, don't hesitated to contact me at  ${
    answers.email
  }. Also you can find more of my projects at [${answers.github}](https://github.com/${
    answers.github
  }/)

  `

}

askUser()
  .then((answers) => {
    writeFileAsync('generated-readme/README.md', generateReadme(answers))
  })
  .catch(error => {
    console.log(error);
  });
