const Shape = require("../lib/shapes");

class Square extends Shape{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor);
        this.shapeCode = `<plygon points = "150, 18 244, 182 56, 182" fill = ${this.shapeColor}/>`
    }
};


module.exports = Square