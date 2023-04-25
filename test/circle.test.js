const Circle = require("../lib/circle");

describe('Circle', () => {
    // test to see if circle is an instance of the child class circle
    describe('Instantiate', () => {
        it('should be an instance of circle class,', () => {
            const circle = new Circle();

            expect(circle).toBeInstanceOf(Circle);

        })
    })
    // testing to see if render is working 
    describe("render(), method", () => {
        it("should return a dynamically created svg circle", () => {
            const circle = new Circle('hi', 'green', 'pink');

            expect(circle.text).toEqual('hi');
            expect(circle.textColor).toEqual('green');
            expect(circle.shapeColor).toEqual('pink')


        })

        it("should return dyncamically created svg script", () => {
            const circle = new Circle('hi', 'green', 'pink')

            expect(circle.shapeCode).toBe(`<circle cx="100" cy="100" r="100" fill = "pink"/>
        <text  x="100" y="50%" fill="green" alignment-baseline="middle" text-anchor="middle" >hi</text>`)

        })
    })
})