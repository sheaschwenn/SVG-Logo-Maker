const Square = require("../lib/square");

describe('Square', () => {
    describe('Instantiate', () =>{
        it('should be an instance of square class,',()=>{
            const square = new Square();

            expect(square).toBeInstanceOf(Square);

        })
    })
    // it("should verify that Shape  ")

})