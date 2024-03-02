const colors = require('./lib/colors.js')

const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Type out your logo text (up to three characters):',
            name: 'text',
            validate: function (response) {
                if (response.length > 3) {
                    return "Please select three characters or less!"
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Type your desired text color (either the color keyword or the hexidecimal value):',
            name: 'textColor',
            validate: function (response) {
                const hexColorRange = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                const lowerResponse = response.toLowerCase();
                if (!hexColorRange.test(response) && !colors.colorCodes.includes(lowerResponse)) {
                    return "Please enter a valid hexidecimal value or color keyword!"
                }
                return true;
            }
        },
        {
            type: 'list',
            message: "Select the shape for your logo:",
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            message: 'Type your desired shape color (either the color keyword or the hexidecimal value):',
            name: 'shapeColor',
            validate: function (response) {
                const hexColorRange = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                const lowerResponse = response.toLowerCase();
                if (!hexColorRange.test(response) && !colors.colorCodes.includes(lowerResponse)) {
                    return "Please enter a valid hexidecimal value or color keyword!"
                }
                return true;
            }
        }
    ])
    .then((response) => {
        console.log(response);
    })