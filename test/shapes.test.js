const Shape = require("../lib/shapes");

describe('Shape', () => {
    describe('Instantiate', () =>{
        it('should be an instance of Shape class,',()=>{
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);

        })
    })
    describe('render() method', () =>{
        it(" should call the render method", () =>{
            const shape = new Shape()

            expect(shape.render()).toBe(new Shape().render())
        })

        it("should return a string of dynamicly created code for svg file", () =>{
                    const shape = new Shape();
                    
        
                    expect(typeof shape.render()).toBe('string')
        
                })
            
        })
    })
    

