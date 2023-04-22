const Triangle = require("../lib/triangle");

describe('Triangle', () => {
    describe('Instantiate', () =>{
        it('should be an instance of Triangle class,',()=>{
            const triangle = new Triangle();

            expect(triangle).toBeInstanceOf(Triangle);

        })
    })
    // it("should verify that Shape  ")

})