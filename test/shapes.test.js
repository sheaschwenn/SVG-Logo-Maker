const Shape = require("../lib/shapes");

describe('Shape', () => {
    describe('Instantiate', () =>{
        it('should be an instance of Shape class,',()=>{
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);

        })
    })
    // it("should verify that Shape  ")

})