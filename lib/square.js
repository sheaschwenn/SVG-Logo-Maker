// requiring shape to create a child class 
const Shape = require("../lib/shapes");

class Square extends Shape{
    constructor(text,textColor,shapeColor){
        // taking these from the parent shape class
        super(text,textColor,shapeColor);
        // template literal to create rectangle SVG with centered text
        this.shapeCode = `<rect x="0" y ="0" width="150" height="150" fill = "${this.shapeColor}"/>
        <text  x="100" y="50%" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>`
    }
};

// makes Square available in other files
module.exports = Square