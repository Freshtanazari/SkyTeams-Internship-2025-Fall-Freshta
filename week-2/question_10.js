function isPrime(num){
    /** 
     * This function checks if a number is prime 
     * @param {number} num - the number to be checked 
     * @return {boolean} - true if prime, false if not
     * @throws {Error} - if the input is not a positive integer.
     */
    if(!Number.isInteger(num) || num <= 0){
        throw new Error("Input must be a positive integer.");
    }
    if(num === 2){
        return true;
    }
    if(num === 1 || num % 2 === 0){
        return false;
    }
    uppperLimit = Math.sqrt(num);
    for(let i = 2; i <= uppperLimit; i++){
        if(num % i ===0){
            return false
        }else {
            return true
        }
    }
}

module.exports = isPrime;
// console.log(isPrime())