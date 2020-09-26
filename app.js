// console.log('Hello Node')
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template.js");


const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What Is Your Name? (Required)",
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log('Please enter Your NaMe');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "github",
      message: "enter your github user name (Required)",
      validate: gitInput => {
        if (gitInput){
          return true;
        } else {
          console.log('Please enter Your github Username');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "about",
      message: "Provide info about you",
    },
  ]);
};


const promptProject = portfolioData => {
  console.log(` 
    =================
    Add a New Project
    =================`);
    if (!portfolioData.projects) {
        portfolioData.projects = []
    }

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project? (Required)",
      validate: projInput => {
        if (projInput){
          return true;
        } else {
          console.log('Please enter Your project NaMe');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
      validate: descriptInput => {
        if (descriptInput){
          return true;
        } else {
          console.log('Please enter proj description');
          return false;
        }
      }
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What did you build this project with? (Check all that apply)",
      choices: [
        "JavaScript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "link",
      message: "Enter the GitHub link to your project. (Required)",
      validate: gitLink => {
        if (gitLink){
          return true;
        } else {
          console.log('Please enter github link');
          return false;
        }
      }
    },
    {
      type: "confirm",
      name: "feature",
      message: "Would you like to feature this project?",
      default: false,
    },
    {
      type: "confirm",
      name: "confirmAddProject",
      message: "Would you like to enter another project?",
      default: false,
    },
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if(projectData.confirmAddProject){
      return promptProject(portfolioData)
    } else {
      return portfolioData
    }
  })
  
};


promptUser()

.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
})



// console.log(inquirer)
// const pageHTML = generatePage(name, github);

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// // const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// const [name, github] = profileDataArgs;

// fs.writeFile('./index.html', pageHTML, err => {
//     if(err) throw new Error(err);

//     console.log('Portfolio complete! Checkout index.html to see the output!');
// })
