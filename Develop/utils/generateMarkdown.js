


module.exports = fileData => {
  const { title, description, ...header } = fileData;

  return  `
  <h1 align="center">  ${title} </h1> <img style="float:right" src="https://img.shields.io/badge/license-${header.badge}-brightgreen">

  ## Description 
  <p><i>${description}</i><p>  

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${header.installation}

  ## Usage 
  ${header.usage}

  ## Features
  ${header.features}

  ## Contributing
  ${header.contributing} <br>

  👪 ${header.contributors}
  
  ## License
  This application is covered by the [${header.license}](https://opensource.org/licenses/${header.license}) license. 
  
  ## Questions

  For questions please contact me on: <br/>
  :octocat: [Github](https://github.com/${header.github}) <br>
  ✉️ Email: ${header.email}<br /><br />
  `;
 
};
