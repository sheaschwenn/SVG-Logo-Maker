class Shape {
    constructor(text,colorText,shapeColor) {
        this.text = text
        this.textCode = textCode;
        this.shapeColor = shapeColor;
        this.shapeCode = ""
    }
    render(){
        return `<svg width ="300" height="200" version ="1.1" xmlns="http://www.w3.org/2000/svg">
        ${data.shapeCode}
        <text x ="100" y="100" fill="${this.textColor}"/>
        </svg>`
    }
    //  this will have the template literal for the svg to render and will be given to children
   
}





module.exports = Shape