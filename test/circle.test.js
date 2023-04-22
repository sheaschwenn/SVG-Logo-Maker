const Circle = require("../lib/circle");

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of circle class,', () => {
            const circle = new Circle();

            expect(circle).toBeInstanceOf(Circle);

        })
    })
    describe("render(), method", () => {
        it("should give svg string", () => {
            const circle = new Circle();
            circle.color("blue");

            expect(circle.render()).toEqual('<circle cx ="50" cy="50" r ="40" fill = "blue"/>')

        })


    })
})