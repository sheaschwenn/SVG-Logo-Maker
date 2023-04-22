const Shape = require("../lib/shapes")

class Circle extends Shape{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor);
        this.shapeCode = `<circle cx="35" cy="80" r="30" fill = "${this.shapeColor}"/>`
    }
};


module.exports = Circle