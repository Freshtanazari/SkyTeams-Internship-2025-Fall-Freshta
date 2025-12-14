const fibonacci = require("./question_16.js")

test("returns the true sequence", ()=>{
    expect(fibonacci(9)).toEqual([0, 1, 1, 2, 3, 5, 8 ]);
})

test("Throws TypeError for wrong inputs", ()=>{
    expect(()=>fibonacci(0.5)).toThrow(TypeError);
})

test("Throws Error for negative inputs", ()=>{
    expect(()=>fibonacci(-3)).toThrow(Error)
})

test("fibonannci 0", ()=>{
    expect(fibonacci(0)).toEqual([ 0 ])
})

test("fibonannci 1", ()=>{
    expect(fibonacci(1)).toEqual([0, 1])
})


test("fibonannci 2", ()=>{
    expect(fibonacci(2)).toEqual([0, 1, 1])
})