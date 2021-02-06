const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

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
      message: "How to install yur application?"
    }, 
    {
      type: "input",
      name: "usage",
      message: "How to use your application?"
    },
    { 
      type: "input",
      name: "license",
      message: "What kind of License should your project have?",
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: "input",
      name: "contributions",
      message: "How can the user contribute to your project?"
    }, 
    {
      type: "input",
      name: "test",
      message: "How can the user test your application?"
    },
    { 
      type: "input",
      name: "questions",
      message: "How can the user contact you for questions?"
    }
    
  ]);




// Generate the Readme file in the generate-readme folder.
const generateReadme = (answers) => {
  return ` # ${answers.title}
  {}

  ## Description

  ${answers.description}

  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Test] (#test)
  
  * [Questions] (#questions)
  
  ## Installation 
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${answers.installation}
  \`\`\`
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  
  ${answers.contributing}
  
  ##Tests
  
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
    if(error.isTtyError) {
      //
    } else{
      //
    }
  });
