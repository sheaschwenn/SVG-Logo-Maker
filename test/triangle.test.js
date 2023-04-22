const Triangle = require("../lib/triangle");

describe('Triangle', () => {
    describe('Instantiate', () =>{
        it('should be an instance of Triangle class,',()=>{
            const triangle = new Triangle();

            expect(triangle).toBeInstanceOf(Triangle);

        })
    })
    describe("render(), method", ()=> {
        it("should give svg string", ()=>{
            const triangle = new Triangle("blue");
            // triangle.shapeColor("blue");

            expect(triangle.render()).toEqual('<plygon points = "150, 18 244, 182 56, 182" fill = "blue"/>')

        })
    })

})