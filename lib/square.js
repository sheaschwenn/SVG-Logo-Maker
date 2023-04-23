const Shape = require("../lib/shapes");

class Square extends Shape{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor);
        this.shapeCode = `<rect x="60" y ="60" width="100" height="100" fill = "${this.shapeColor}"/>`
    }
};


module.exports = Square