// requiring shape to make a child class Triangle from parent class Shape
const Shape = require("./shapes");

// creating a child class Triangle from parent class Shape
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        // dynamically creating svg script from user input 
        this.shapeCode = `<polygon points="150, 18 244, 182 56, 182" fill= "${this.shapeColor}"/>
        <text  x="50%" y="50%" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>`
    }
};

// makes class Triangle available in other files 
module.exports = Triangle