const isPrime = require("./question_10.js");

test("correctly outputs true for prime numbers", ()=>{
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
})

test("Correctly outputs false for non-prime numbers", ()=>{
    expect(isPrime(1)).toBe(false);
    expect(isPrime(100)).toBe(false)
})

test("Throws error for non-positive integers or not integers at all", ()=>{
    expect(()=> isPrime(-5).toThrow(Error));
    expect(()=> isPrime(0).toThrow(Error));
    expect(()=> isPrime("book").toThrow(Error));

})