// Parent class "shape"
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
};

// Classes for circle, triangle, and square (to inherit "shape" class). Each class contains a unique render function that applies to its shape properties.
class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        return `<circle cx="150" cy="100" r="95" fill="${this.shapeColor}" />`
    }
};

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<polygon points="35,200 150,0 265,200" fill="${this.shapeColor}" />`
    }
};

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<rect x="50" y="5" width="190" height="190" fill="${this.shapeColor}" />`
    }
};
// Exporting shape classes to writeSVG.js
module.exports = {
    Circle,
    Triangle,
    Square
}