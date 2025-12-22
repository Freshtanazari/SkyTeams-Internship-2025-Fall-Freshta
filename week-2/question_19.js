function PyramidPattern(num){
    /**
     * returns the pattern of a right anlge triangle with specific line
     * @param {integer} num - the input number
     * @returns {pattern} - lines of * to shape the angle
     * @throws {TypeError} - if the input is not a positive integer
     * 
     */
    if(!Number.isInteger(num) | num < 0 ){
        throw new TypeError("Please input a positive integer");
    }
    let str = "";
    let i = 0;
    while(i < num){
        space = " ".repeat(num - i);
        str += space + "*".repeat(i * 2 + 1) + "\n"
        i++
    }
    return str
}
module.exports = PyramidPattern;
console.log(PyramidPattern(4))