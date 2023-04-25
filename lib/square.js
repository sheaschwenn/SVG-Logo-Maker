const Shape = require("../lib/shapes");

class Square extends Shape{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor);
        this.shapeCode = `<rect x="0" y ="0" width="150" height="150" fill = "${this.shapeColor}"/>
        <text  x="100" y="50%" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>`
    }
};


module.exports = Square