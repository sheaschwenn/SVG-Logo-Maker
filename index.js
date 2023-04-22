// Pseudo code 
// require inquirer to prompt users
// require fs to write .svg file 
// user can onlyinput 3 characters so look into how to make the a restriction for inquirer
// color keyword or hexcode for text
// prompt with list of shapes cirlce, triangle and square 
// color keyword or hexcode for shape
// fs.writeFile('logo.svg', ,err etc)
// look into requirements for an svg file
// in shapes, create a file that makes the actual svg file 
// tests for if the user has less than 3 characters 
// test to see if shape is the write shape? 
// create classes for 

const fs = require("fs");
const inquirer = require("inquirer");
const Triangle = require("./lib/triangle");


inquirer
    .prompt([
        {
            type: 'input',
            message: "Enter up to three characters for your logo",
            name: 'logoText',
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
.then((data)=>{
    let shape;
    if(data.shape === "Triangle"){
        shape = new Triangle(data.logoText, data.textColor, data.shapeColor)
    }
    fs.writeFile('logo.svg',shape.render(data),err =>{
        err? console.error(err):console.log("Generated logo.svg")
    })
})