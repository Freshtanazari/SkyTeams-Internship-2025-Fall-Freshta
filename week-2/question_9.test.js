const freqCounter = require("./question_9.js")

test("freqCounter returns corrent count of occurrences", ()=>{
    expect(freqCounter([1, 2, 3,5 ,3, 2, 3, 5], 3)).toBe(3);
    expect(freqCounter([false, true, true, true, false], true)).toBe(3);
    expect(freqCounter(["3"], 3)).toBe(0);
})

test("FreqCounter throws TypeError for non-array inputs", ()=>{
    expect(()=> freqCounter("not an array", 3)).toThrow(TypeError);
})

test("FreqCounter returns 0 when the array is empty", ()=>{
    expect(freqCounter([], 1)).toBe(0);
})