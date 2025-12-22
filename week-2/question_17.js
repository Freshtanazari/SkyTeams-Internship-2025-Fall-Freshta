function RightAnglePattern(num){
    /**
     * returns the pattern of a right anlge triangle with specific line
     * @param {integer} num - the input number
     * @returns {pattern} - lines of * to shape the angle
     * @throws {TypeError} - if the input is not a positive integer
     * 
     */
    if(!Number.isInteger(num) || num < 0 ){
        throw new TypeError("Please input a positive integer");
    }
    let str = "";
    for(let i = 1; i <= num ;i++){
        str += "*".repeat(i) + "\n"
    }
    return str
};
module.exports = RightAnglePattern;

