# SVG-Logo-Maker
Command-line application to create a custom SVG logo
## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 
| Node.js    | [https://nodejs.org/en/docs](https://nodejs.org/en/docs)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |  
| Jest | [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)     |  
| Inquirer | [https://www.npmjs.com/package/inquirer/v/8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)     |

## Description 

[Visit the Deployed Site](https://youtu.be/BFyeuLhjcPY)

This command-line application generates a custom SVG logo based on users input of text, text color, shape and shape color. The users inputs are rendered in a SVG file. 


![Site Langing Page](./site.gif)


## Table of Contents 

* [Installation](#installation)
* [Code Highlight](#code-highlight)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)


## Installation
npm i 


## Code Highlight

The parent class for my Circle, Triangle and Square classes that contains the render function that dynamically creates script for the SVG file.


```js
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
        <text  x="50%" y="50%" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>
        </svg>`
    }  
}

```
A child class that takes on all properties of the parent Shape class and includes the Square specific SVG script
```js
class Square extends Shape{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor);
        this.shapeCode = `<rect x="60" y ="60" width="100" height="100" fill = "${this.shapeColor}"/>`
    }
};
```



## Usage 
To create a simple custom SVG logo
To install

```md
![alt text](assets/images/screenshot.png)
```


## Learning Points 
This project was my first time working with classes as well as with test driven development.  I have never worked with so many files at once so a big learning point was creating a mental model of how all of the files worked together to create this application

* classes
* Jest
* SVG
* validate within inquirer


## Author Info


### Shea Schwennicke


* [Portfolio](https://sheaschwenn.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/shea-schwennicke-76a378210/)
* [Github](https://github.com/sheaschwenn)




## Credits

I worked with [Cassandra Tepper](https://github.com/CTep09) to understand more about this project



## License

MIT License

For more information please refer to LICENSE in the repo


---



© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.