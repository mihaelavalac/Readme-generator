module.exports = fileData => {
  // destructure page data by section
  const { title, description, ...header } = fileData;

  return  `
  # ${title}

  ## Description 
  ${description}
  ${header.languages}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${header.installation}

  ## Usage 
  ${header.usage}

  ## Features
  ${header.features}

  ## Contributing
  ${header.contribution}

  ## Credits
  ${header.credits}
  
  ## License
  [${header.license}](https://choosealicense.com/licenses/${header.license}/)

  ## Badges
  [image](https://img.shields.io/badge/license-${header.license}-brightgreen)

`;
};



