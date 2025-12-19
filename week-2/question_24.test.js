const pascalTriangle = require("./question_24.js");

test("Throws typeError for non integer inputs or is negative", ()=>{
    expect(()=> pascalTriangle("A")).toThrow(TypeError);
    expect(()=> pascalTriangle(-1)).toThrow(TypeError);
})

test("correctly generates a pascal triangle", ()=>{
    expect(pascalTriangle(5)).toEqual([ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]);
    expect(pascalTriangle(0)).toEqual([]);
})
