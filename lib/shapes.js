// create a class of shape with all things that each shape has in common
class Shape {
    constructor(text,textColor,shapeColor) {
        this.text = text
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shapeCode = ""
    }
    // function to return a string for the svg script 
    // dynamically created with shape specific code
    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeCode}
        </svg>`
    }
   
}





module.exports = Shape