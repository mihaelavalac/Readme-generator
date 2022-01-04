


module.exports = fileData => {
  const { title, description, ...header } = fileData;

  return  `
  <h1 align="center">  ${title} <img align="center" src="https://img.shields.io/badge/${header.badge}-blue"> </h1>

  ## Description 
  <p>You can see the project repository [here](${header.link}).</p><br>

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


  <b> Current contributors: </b> <br>

  👪 ${header.contributors}
  
  ## License

  This application is covered by the <b>[${header.license}](https://opensource.org/licenses/${header.license})</b> license. 
  
  ## Questions

  For questions please contact me on: <br/>

  :octocat: Github: [${header.github}](https://github.com/${header.github}) <br>
  ✉️ Email: ${header.email}<br/>
  `;
};
