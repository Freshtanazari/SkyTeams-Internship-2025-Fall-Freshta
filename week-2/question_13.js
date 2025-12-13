function power(a, b){
    /**
     * returns the result of a to the power of b
     * @param {number} a - the input number 
     * @param {number} b - the power for the input number
     * @returns {number} - the result of a to the power of b
     * @throws {TypeError} - if the input is not a number
     */

    if(typeof a != "number" | typeof b != "number"){
        throw new TypeError("Both inputs must be a number");
    }
    result = 0;
    if(b == 1 | a == 0){
        return a
    }else if(b == 0){
        return 1 
    }else if(b> 0){
        result = a * power(a, b-1)
        return result
    }else{
        result = 1/(a * power(a, Math.abs(b)-1))
        return result
    }
}

module.exports = power;
console.log(power(2,-1))