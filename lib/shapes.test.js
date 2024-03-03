const Shapes = require('./shapes.js');

describe('Circle', () => {
    describe('render', () => {
        it('Output the SVC code for a circle that is blue', () => {
            const value = `<circle cx="150" cy="100" r="95" fill="blue" />`
            const shape = new Shapes.Circle("blue");
            expect(shape.render()).toEqual(value);
        });
    });
});

describe('Triangle', () => {
    describe('render', () => {
        it('Output the SVC code for a triangle that is black', () => {
            const value = `<polygon points="35,200 150,0 265,200" fill="black" />`
            const shape = new Shapes.Triangle("black");
            expect(shape.render()).toEqual(value);
        });
    });
});

describe('Square', () => {
    describe('render', () => {
        it('Output the SVC code for a square that is pink', () => {
            const value = `<rect x="50" y="5" width="190" height="190" fill="pink" />`
            const shape = new Shapes.Square("pink");
            expect(shape.render()).toEqual(value);
        });
    });
});