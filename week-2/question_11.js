const isPrime = require("./question_10")
function primesTill(num){
    /**
     * returns an array of all prime numbers up to N
     * 
     * @param {Integer} num - the given input number
     * @returns {Array} - array of all prime numbers up to N
     * @throws {Error} - if the input is not a postive integer above 0 
     */
    if(!Number.isInteger(num) | num <= 0){
        throw new Error("Input only postive Integers greater than 0")
    }
    primeNums = []
    for(let i = 1; i <= num; i++){
        if(isPrime(i)){
            primeNums.push(i);
        }
    }
    return primeNums
}

module.exports = primesTill;
