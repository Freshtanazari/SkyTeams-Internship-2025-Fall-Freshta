const passwordChecker = require("./question_21.js")

test("throws Error if the input is null", ()=>{
    expect(()=> passwordChecker(null)).toThrow(TypeError);
})

test("returns Weak correclty", ()=>{
    expect(passwordChecker(12412412)).toBe("Weak");
    expect(passwordChecker("lajfdljfaafd")).toBe("Weak");
    expect(passwordChecker("weakPass")).toBe("Weak");
    expect(passwordChecker("JLSDJFAL")).toBe("Weak");
    expect(passwordChecker("sfGS23")).toBe("Weak");
})

test("correctly returns strong", ()=>{
    expect(passwordChecker("1234BIsm")).toBe("Strong")
})