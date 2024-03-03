const shape = require('./shapes.js');

function writeSVG(response) {
    switch (response.shape) {
        case "Circle":
            const fileCir = new shape.Circle(response.shapeColor, response.text, response.textColor);
            return fileCir.render();
            break;

        case "Triangle":
            const fileTri = new shape.Triangle(response.shapeColor, response.text, response.textColor);
            return fileTri.render();
            break;

        case "Square":
            const fileSqu = new shape.Square(response.shapeColor, response.text, response.textColor);
            return fileSqu.render();
            break;
    }
};

module.exports = writeSVG;