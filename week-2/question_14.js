function factorial(num){
    /**
     * returns the factorial of a number
     * @param {Integer} num - the given input 
     * @return {Integer} - returns the factorial of the number
     * @throws {TypeError} - if the input is not a positive integer
     * @throws {Error} - if the integer is not positive
     */
    if(!Number.isInteger(num)){
        throw new TypeError("Please input a postive integer")
    }if(num < 0){
        throw new Error("Please enter a positive integer")
    }
    if(num == 0 ){
        return 1
    }
    return num * factorial(num-1)
}
module.exports = factorial;