// requiring shape for tests
const Shape = require("../lib/shapes");

// if shape is an instance of shape class
describe('Shape', () => {
    describe('Instantiate', () => {
        it('should be an instance of Shape class,', () => {
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);


        })
    })
// testing if render is a method
    describe('render() method', () => {
        it(" should call the render method", () => {
            const shape = new Shape()

            expect(shape.render()).toBe(new Shape().render())
        })
        // if render is producing a string
        it("should return a string ", () => {
            const shape = new Shape();
            expect(typeof shape.render()).toBe('string')

        })

    })
    // testing to see if an instance of shape has all of the correct constructor fields 
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
        const shape = new Shape("", " ", "green");

        expect(shape.shapeColor).toEqual("green");
    })

})
