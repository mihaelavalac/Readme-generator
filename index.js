//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("You need to enter a project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message:
        "Provide a description of the project. Consider providing responses to the questions like: what was your motivation, why did you build this project, what problem does it solve, what did you learn, and  what makes your project stand out when describing your project. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter a project description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username? (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("You need to enter a GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("You need to enter a GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "link",
      message: "Enter the GitHub link to your project. (Required)",
      validate: (linkInput) => {
        if (linkInput) {
          return true;
        } else {
          console.log("You need to enter a project GitHub link!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "If applicable, provide guidances for project installation. To include a command use ` one line command` and ``` multiple rows command```. If you want to add new line use the HTML <br> tag.",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
      type: "input",
      name: "features",
      message:
        "If applicable, provide a description of the features in your project. For example you can add a paragraph followed by a <br> and an ![image](the path to your image here)",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "How to contribute to the project?",
    },
    {
      type: "input",
      name: "contributors",
      message:
        "Who contributed to the project?",
    },
    {
      type: "list",
      name: "license",
      message: "Select a license for your project (Chose one)",
      choices: [
        "GPL-2.0",
        "GPL-3.0",
        "MPL-2.0",
        "Apache-2.0",
        "MIT",
        "BSL-1.0",
        "Unlicense",
      ],
    },
    {
      type: "list",
      name: "badge",
      message: "Select a badge for your project license (Chose all that apply)",
      choices: [
        "license-GPL 2.0",
        "license-GPL 3.0",
        "license-MPL 2.0",
        "license-Apache 2.0",
        "license-MIT",
        "license-BSL 1.0",
        "license-Unlicense",
      ],
    }
  ]);
};

const writeFile = (content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", content, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

promptUser() //.then (answer => console.log(answer));
  .then((answer) => {
    return writeFile(generateMarkdown(answer));
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
