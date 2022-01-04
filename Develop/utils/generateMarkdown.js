


module.exports = fileData => {
  const { title, description, ...header } = fileData;

  return  `
  <h1 align="center">  ${title} </h1> <img src="https://img.shields.io/badge/license-${header.badge}-brightgreen">

  ## Description 
  <p>${description}<p>  
  ![badge](https://img.shields.io/badge/${header.badge}-brightgreen)

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
  This application is covered by the [${header.license}](https://opensource.org/licenses/${header.license}) license. `;


};
