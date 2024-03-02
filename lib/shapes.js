// Global properties:
class Shape {
    constructor(shapeColor, text, textColor, textPosition) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.textPosition = textPosition;
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor, textPosition, shapeSize, shapePosition) {
        super(shapeColor, text, textColor, textPosition),
            this.shapeSize = 3;
        this.shapePosition = 3;
    }
};

class Triangle extends Shape {
    constructor(shapeColor, text, textColor, textPosition, shapeSize, shapePosition) {
        super(shapeColor, text, textColor, textPosition),
            this.shapeSize = shapeSize;
        this.shapePosition = shapePosition;
    }
};

class Square extends Shape {
    constructor(shapeColor, text, textColor, textPosition, shapeSize, shapePosition) {
        super(shapeColor, text, textColor, textPosition),
            this.shapeSize = shapeSize;
        this.shapePosition = shapePosition;
    }
};

const svcTest = new Triangle ("red", "ABC", "Blue", 5, 500, 40); 

console.log(svcTest);

// shape color, text, text color

// Shape properties:
// shape, size, position

// Render function