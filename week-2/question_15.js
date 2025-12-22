function isArmstrong(num){
    /**
     * @param {integer} num - the given input
     * @return {boolean} - true if its armstrong and false if it is not
     * @throws {TypeError} - if the input is not integer
     * @throws {Error} - if the integer is not positive 
     */
    if(!Number.isInteger(num)){
        throw new TypeError("Enter an integer");
    }
    if(num < 0 ){
        throw new Error("Enter a positive integer")
    }
    digits = num.toString()
    length = digits.length
    total = 0
    for(let i = 0; i < length; i++){
        total += parseInt(digits[i]) ** length
    }
    if(total == num){
        return true
    }
    return false

}
module.exports = isArmstrong;