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
            const triangle = new Triangle("hi", "blue", "green")

            expect(triangle.render()).toBe('+ <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            +        ' <polygon points="150, 18 244, 182 56, 182" fill= "green"/>'
            +        ' <text x="100" y="100" fill="blue" text-anchor="middle" alignment-badeline="middle">hi</text>'
            +        ' </svg>')

        })
    })

})