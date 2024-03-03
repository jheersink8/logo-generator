// This imported package contains all avilable colors that can be used as keywords
const colors = require('./colors.js');
// Questions that user will be asked
const questions = [
    'Type out your logo text (up to three characters):',
    'Type your desired text color (either the color keyword or the hexadecimal value):',
    'Select the shape for your logo:',
    'Type your desired shape color (either the color keyword or the hexadecimal value):',
]
// Function to validate the length of the text is less than 3
let validateLength = response => {
    if (response.length > 3) {
        return "Please select three characters or less!"
    }
    return true;
};
// Function to validate the color keyword or hexidecimal code is valid 
let validateColor = response => {
    const hexColorRange = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const lowerResponse = response.toLowerCase();
    if (!hexColorRange.test(response) && !colors.colorCodes.includes(lowerResponse)) {
        return "Please enter a valid hexidecimal value or color keyword!"
    }
    return true;
};
// Modules to export to index.js
module.exports = {
    questions,
    validateLength,
    validateColor
};