function factorial(num){
    /**
     * returns the factorial of a number using iterative loops
     * @param {integer} num - the given input
     * @return {number} - the result of the factorial
     * @throws {TypeError} - if the input is not a positive integer or an integer at all
     */
    if(! Number.isInteger(num)){
        throw new TypeError("Please enter an integer")
    }
    if(num < 0){
        throw new TypeError("Please Enter a postive integer");
    }
    let total = 1;
    for (let i = 1 ; i <= num; i++){
        total *= i ;
    }
    return total 
}

module.exports = factorial;