// Imported node.js packages
const fs = require('fs');
const inquirer = require('inquirer');
const userInput = require('./lib/userInput.js');
const writeSVG = require('./lib/writeSVG.js');
// Function to write actual SVG file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg'))
};
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
            writeToFile(`./examples/${response.shapeColor}-${response.shape}_${response.text}.svg`, writeSVG(response))
        });
}
// Initiate function when running "node index.js"
init()