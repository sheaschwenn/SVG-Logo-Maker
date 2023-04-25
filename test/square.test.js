const Square = require("../lib/square");

describe('Square', () => {
    describe('Instantiate', () =>{
        it('should be an instance of square class,',()=>{
            const square = new Square();

            expect(square).toBeInstanceOf(Square);

        })
    })
    // if square is an instance of child class
    describe("render(), method", () => {
            it("should return a dynamically created svg square", () => {
                const square = new Square('hi','green','pink');
                
                expect(square.text).toEqual('hi');
                expect(square.textColor).toEqual('green');
                expect(square.shapeColor).toEqual('pink')
                
    
            })
            it("should return dyncamically created svg script", () => {
                const square = new Square('hi', 'green', 'pink')
    
                expect(square.shapeCode).toBe(`<rect x="0" y ="0" width="150" height="150" fill = "pink"/>
        <text  x="100" y="50%" fill="green" alignment-baseline="middle" text-anchor="middle" >hi</text>`)
            })
        
        })


    })

