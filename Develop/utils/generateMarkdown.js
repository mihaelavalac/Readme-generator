module.exports = fileData => {
  // destructure page data by section
  const { title, description, ...header } = fileData;
  return  `
  # ${title}

  ## Description 
  ${description}  
  ![alt text](https://img.shields.io/badge/license-${header.license}-brightgreen)

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
  [${header.license}](https://opensource.org/licenses/${header.license})\n`;
};
