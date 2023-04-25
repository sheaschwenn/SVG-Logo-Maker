const Shape = require("./shapes");

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeCode = `<polygon points="150, 18 244, 182 56, 182" fill= "${this.shapeColor}"/>
        <text  x="50%" y="50%" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>`
    }
};

module.exports = Triangle