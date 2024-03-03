// Imported node.js packages
const fs = require('fs');
const inquirer = require('inquirer');
const userInput = require('./lib/userInput.js');
// Init function to run when "node index.js" is invoked.
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: userInput.questions[0],
                name: 'text',
                validate: userInput.validateLength
            },
            {
                type: 'input',
                message: userInput.questions[1],
                name: 'textColor',
                validate: userInput.validateColor
            },
            {
                type: 'list',
                message: userInput.questions[2],
                name: 'shape',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: 'input',
                message: userInput.questions[3],
                name: 'shapeColor',
                validate: userInput.validateColor
            }
        ])
        .then((response) => {
            fs.writeFile('./lib/userResponse.js', JSON.stringify(response), (err) =>
                err ? console.error(err) : console.log('Generated logo.svg'));
        })
}
init();

