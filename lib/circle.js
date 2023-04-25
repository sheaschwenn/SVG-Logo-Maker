const Shape = require("../lib/shapes")

class Circle extends Shape{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor);
        this.shapeCode = `<circle cx="100" cy="100" r="100" fill = "${this.shapeColor}"/>
        <text  x="100" y="50%" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>`
    }
};


module.exports = Circle