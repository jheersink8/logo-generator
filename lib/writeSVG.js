// Importing shapes.js
const shape = require('./shapes.js');
// Function to write SVG file based on shape class
const svgStart = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">`
function writeSVG(response) {
    switch (response.shape) {
        case "Circle":
            const fileCir = new shape.Circle(response.shapeColor);
            return `${svgStart}
                ${fileCir.render()} 
                <text x="150" y="115" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
                </svg>`
            break;

        case "Triangle":
            const fileTri = new shape.Triangle(response.shapeColor);
            return `${svgStart}
                ${fileTri.render()}
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
                </svg>`
            break;

        case "Square":
            const fileSqu = new shape.Square(response.shapeColor);
            return `${svgStart}
                ${fileSqu.render()}
                <text x="150" y="120" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
                </svg>`
            break;
    }
};
// Exporting to index.js
module.exports = writeSVG;