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
      name: "link2",
      message:
        "If your project is deployed, enter the live link to your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "If applicable, provide guidances for project installation.",
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
        "If applicable, provide a list with description of the features used/developed in your project.",
    },
    {
      type: "input",
      name: "contribution",
      message:
        "If applicable, add guidelines for other developers regarding how to contribute to your project.",
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
