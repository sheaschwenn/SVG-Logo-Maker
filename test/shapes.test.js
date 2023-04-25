// test for 



// each each class renders an svg script 
// do i need a test for inquirer
// if statement for which class to use 
const Shape = require("../lib/shapes");

// if shape is an instance of shape class
describe('Shape', () => {
    describe('Instantiate', () =>{
        it('should be an instance of Shape class,',()=>{
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);
           

        })
    })
    // if render is producing a string
    describe('render() method', () =>{
        it(" should call the render method", () =>{
            const shape = new Shape()

            expect(shape.render()).toBe(new Shape().render())
        })

        it("should return a string of dynamicaly created code for svg file", () =>{
                    const shape = new Shape();
                    
        
                    expect(typeof shape.render()).toBe('string')
        
                })
            
        })

        it("should create a text field", () => {
            let testText = "Hi"
            const shape = new Shape(testText);

            expect(shape.text).toEqual(testText);
        })

        it("should create a textColor field", () => {
            const shape = new Shape("", "green");

            expect(shape.textColor).toEqual("green");
        })
        it("should create a shapeColor field", () => {
            const shape = new Shape("", " ","green");

            expect(shape.shapeColor).toEqual("green");
    })
    
})
