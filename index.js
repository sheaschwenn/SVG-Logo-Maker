// requiring all packages and modules needed 
const fs = require("fs");
const inquirer = require("inquirer");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square")
const Circle = require("./lib/circle")

// calling inquirer and using the prompts to gather user input 
inquirer
    .prompt([
        {
            type: 'input',
            message: "Enter up to three characters for your logo",
            name: 'logoText',
            // making sure that users can only input 3 characters or less for their logos
            validate: function characters(logoText){
                if(logoText.length > 3){
                    console.log("Please only enter three characters")
                    return;
                }
                else{
                    return true
                    }
            }
        },
        {
            type: 'input',
            message: "Choose your text color",
            name: 'textColor'
        },
        {
            type: 'list',
            message: "choose a shape",
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shape'
        },
        {
            type: 'input',
            message: "Choose your shape color",
            name: 'shapeColor'
        }
    ])
    // using the user input to render SVG logo 
.then((data)=>{
    let shape;
    // if statements for each shape option to then make an instance of that class based on user input 
    if(data.shape === "Triangle"){
        shape = new Triangle(data.logoText, data.textColor, data.shapeColor)
    }
    else if(data.shape === "Square"){
        shape = new Square(data.logoText, data.textColor, data.shapeColor)
    }
    else{
        shape = new Circle(data.logoText, data.textColor, data.shapeColor)
    }
    // writing an svg file using user input, if error console logging error if sucessful console logging generaterated logo.svg
    fs.writeFile('./examples/logo.svg',shape.render(data),err =>{
        err? console.error(err):console.log("Generated logo.svg")
    })
})