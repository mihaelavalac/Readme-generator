const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//Gathers the information about the project from the user by asking questions.
const askUser = () => 
  inquirer.prompt([
    {
      type: "input",
      name: "gitHubUserName",
      message: "What is your Github username?"
    },
    { type: "input",
      name: "Email",
      message: "What is your Email address?"
    },
    { 
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "Description",
      message: "How can you describe your project?"
    },
    {
      type: "input",
      name: "Installation",
      message: "How to install yur application?"
    }, 
    {
      type: "input",
      name: "Usage",
      message: "How to use your application?"
    },
    { 
      type: "input",
      name: "License",
      message: "//LOOK FOR A LIST OF LICENSES"
    },
    {
      type: "input",
      name: "Contributions",
      message: "How can the user contribute to your project?"
    }, 
    {
      type: "input",
      name: "Test",
      message: "How can the user test your application?"
    },
    { 
      type: "input",
      name: "gitHubUserName",
      message: "How can the user contact you for questions?"
    }
    
  ]);

// Generate the Readme file in the generate-readme folder.
const generateReadme = (answers) => {

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
