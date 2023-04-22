class Shape {
    constructor(text,textColor,shapeColor) {
        this.text = text
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shapeCode = ""
    }
    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeCode}
        <text x="100" y="100" fill="${this.textColor}" text-anchor="middle" alignment-badeline="middle">${this.text}</text>
        </svg>`
    }
    //  this will have the template literal for the svg to render and will be given to children
   
}





module.exports = Shape