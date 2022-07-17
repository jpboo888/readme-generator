// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
const path = require("path")

// TODO: Create an array of questions for user input
const questions = [
        // title of project
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project? (Required)',
          validate: title => {
            if (title) {
               return true;
          } else {
            console.log('Please enter the title!');
            return false;
            }
          }   
        },
        // description of project
        {
         type: 'input',
         name: 'description',
         message: 'Provide a description of the project (Required)',
         validate: description => {
            if (description) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
          }   
        },
        // table of contents

         // installation
       {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions (Required)',
        validate: installation => {
           if (installation) {
               return true;
           } else {
               console.log('You need to enter installation instructions!');
               return false;
           }
         }   
       }, 

        // usage information
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information (Required)',
            validate: usage => {
               if (usage) {
                   return true;
               } else {
                   console.log('You need to enter usage information!');
                   return false;
               }
             }   
           }, 

        // license

        {
          type: 'list',
          name: 'license',
          message: 'Please specify the license being used for your project:',
          choices: ['The Unlicense', 'Boost Software License 1.0', 'MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU LGPLv3', 'GNU GPLv3', 'GNU AGPLv3']
        },

        // contribution guidelines
        {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines (Required)',
        validate: contribution => {
            if (contribution) {
                 return true;
            } else {
                console.log('You need to enter contribution guidelines!');
                return false;
            }
          }   
        },     

           // tests
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for your application. Then provide examples on how to run them (Required)',
            validate: tests => {
                if (tests) {
                     return true;
                } else {
                    console.log('You need to enter tests!');
                    return false;
                }
              }   
            }, 

    // github
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub Username (Required)',
      validate: username => {
        if (username) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    // email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: email => {
        if (email) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false;
        }
        }
    },
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join('Generated_README', fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) =>  {
  console.log(answers)
  writeToFile('README.md', generateMarkdown(answers)) 
 })
}

// Function call to initialize app
init();
