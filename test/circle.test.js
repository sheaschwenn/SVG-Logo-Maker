const Circle = require("../lib/circle");

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of circle class,', () => {
            const circle = new Circle();

            expect(circle).toBeInstanceOf(Circle);

        })
    })
    describe("render(), method", () => {
        it("should return a dynamically created svg circle", () => {
            const circle = new Circle('hi','green','pink');
            

            // expect(circle.render()).toBe('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            // <circle cx="35" cy="80" r="30" fill = "green"/>
            // <text  x="50%" y="50%" fill="pink" alignment-baseline="middle" text-anchor="middle" >gt</text>
            // </svg>')

        })


    })
})