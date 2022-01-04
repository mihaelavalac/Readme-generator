


module.exports = fileData => {
  const { title, description, ...header } = fileData;

  return  `
  <h1 align="center">  ${title} </h1> <img align="center" src="https://img.shields.io/badge/${header.badge}-blue">

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


  ###Contributors
  👪 ${header.contributors}
  
  ## License
  This application is covered by the [${header.license}](https://opensource.org/licenses/${header.license}) license. 
  
  ## Questions

  For questions please contact me on: <br/>
  :octocat: [Github: ${header.github}](https://github.com/${header.github}) <br>
  ✉️ Email: ${header.email}<br /><br />
  `;
 
};
