const Circle = require("../lib/circle");

describe('Circle', () => {
    describe('Instantiate', () =>{
        it('should be an instance of circle class,',()=>{
            const circle = new Circle();

            expect(circle).toBeInstanceOf(Circle);

        })
    })
    // it("should verify that Shape  ")

})