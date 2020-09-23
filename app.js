// console.log('Hello Node')
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What Is Your Name?'
    }
])
.then(answers => console.log(answers));

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
