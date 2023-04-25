// requiring triangle js script for tests
const Triangle = require("../lib/triangle");

describe('Triangle', () => {
    // if triangle instance of the child class Triangle
    describe('Instantiate', () => {
        it('should be an instance of Triangle class,', () => {
            const triangle = new Triangle();

            expect(triangle).toBeInstanceOf(Triangle);

        })
    })
    // test to see if the render method is working correctly
    describe("render(), method", () => {
        it("should return svg triangle class components", () => {
            const triangle = new Triangle('hi', 'green', 'pink');

            expect(triangle.text).toEqual('hi');
            expect(triangle.textColor).toEqual('green');
            expect(triangle.shapeColor).toEqual('pink')


        })
        // test to see if svg script is being dynamically created
        it("should return dyncamically created svg script", () => {
            const triangle = new Triangle('hi', 'green', 'pink')

            expect(triangle.shapeCode).toBe(`<polygon points="150, 18 244, 182 56, 182" fill= "pink"/>
        <text  x="50%" y="50%" fill="green" alignment-baseline="middle" text-anchor="middle" >hi</text>`)
        })

    })
})