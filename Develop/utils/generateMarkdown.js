
// const renderLicenseBadge = (license) => {
//   licenseBandge ='';
//   if(!license) {
//     return '';
//   } else {
//     return `https://img.shields.io/badge/${license}-brightgreen`;
//   }
//   if (license='GNU Affero General Public License v3.0'){
//     licenseBandge = 'https://img.shields.io/badge/${license}-blue.svg/'
//   }

// }

// If there is no license, return an empty string
// const renderLicenseLink = (license)  =>{

// }

// If there is no license, return an empty string
// const renderLicenseSection = (license) =>{

// }


module.exports = fileData => {
  // destructure page data by section
  const { title, description, ...header } = fileData;

  return  `
  # ${title}

  ## Description 
  ${description}  
  ![${header.license}](https://opensource.org/licenses/${header.license})
  ![image](https://img.shields.io/badge/license-${header.license}-blue.svg/) 

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Contributing](#contributing)
  
  ## Installation
  ${header.installation}

  ## Usage 
  ${header.usage}

  ## Features
  ${header.features}

  ## Contributing
  ${header.contribution}
  
  ## License
  ![${header.license}](https://opensource.org/licenses/${header.license})

  ## Badges
  [![(https://img.shields.io/badge/License-${header.license})]](https://opensource.org/licenses/${header.license})\n`;
};
