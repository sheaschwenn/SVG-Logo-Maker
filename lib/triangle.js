const Shape = require("./shapes");

class Triangle extends Shape{
    constructor(text,colorText,shapeColor,shapeCode){
        super(text,colorText,shapeColor);
        this.shapeCode = `<plygon points = "150, 18 244, 182 56, 182" fill = ${this.color}/>`
    }
 
};

module.exports = Triangle