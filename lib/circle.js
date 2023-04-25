// requiring shape so to create a child class 
const Shape = require("../lib/shapes")

// creating a child class Circle from the parent class shape 
class Circle extends Shape{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor);
        // dynamically creates svg script from a users input 
        this.shapeCode = `<circle cx="100" cy="100" r="100" fill = "${this.shapeColor}"/>
        <text  x="100" y="50%" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>`
    }
};

// makes Circle available in other files
module.exports = Circle