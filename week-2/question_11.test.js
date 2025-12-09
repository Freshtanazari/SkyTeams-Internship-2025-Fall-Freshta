const primesTill = require("./question_11.js");
test("Returns all the prime numbers correctly", ()=>{
    expect(primesTill(7)).toBe([2, 3, 5, 7]);
})

test("Throws Error if the input is not an integer or a positive integer", ()=>{
    expect(primesTill('b')).toThrow(Error);
    expect(primesTill(-5)).toThrow(Error);
})