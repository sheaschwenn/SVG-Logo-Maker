const Square = require("../lib/square");

describe('Square', () => {
    describe('Instantiate', () =>{
        it('should be an instance of square class,',()=>{
            const square = new Square();

            expect(square).toBeInstanceOf(Square);

        })
    })
    describe("render(), method", () => {
        it("should give svg string", () => {
            const square = new Square();
            square.color("blue");

            expect(square.render()).toEqual('<rect width = "300" height ="100" fill = "blue"/>')

        })


    })

})