function getBinary(num){
    /**
     * returns the binary value of a postive integer
     * @param {integer} num - the input given
     * @returns {binary} - binary value of the num 
     * @throws {TypeError} - if input is not an integer or it is not above -1 
     */
    if(!Number.isInteger(num)){
        throw new TypeError("Please Enter an integer");
    }
    if(num < 0 ){
        throw new TypeError("Please enter an integer above -1");
    }
    let binary = "";
    let result ="";

    while(true){
        remainder = num % 2;
        binary += remainder;
        num = Math.floor((num / 2));
        if(num == 0){
            for(let i = binary.length-1 ; i >= 0; i--){
                result += binary[i];
            }
        return result;
        }
    }
}

module.exports = getBinary;