function fibonacci(num){
    /**
     * returns te fibonacci sequence
     * @param {num} - the given input
     * @returns {Array} - an array of the output sequence 
     * @throws {TypeError} - if the input is not a number
     * @throws {Error} - if the input is not a positive integer
     */
    
    if(!Number.isInteger(num)){
        throw new TypeError("Enter integers only")
    }
    if(num < 0 ){
        throw new Error("Enter only positve integers only")
    }
  
    sequence = [0];
    let i = 0;


    while(i < num){
        if(i == 0 || i == 1){
            sequence.push(1); 
            i++;
        }
        else {
            result = sequence[sequence.length-1] + sequence[sequence.length-2];
            if(result > num){
                return sequence
            }else{
                sequence.push(result)
                i++; 
            }   
        } 
    }
    return sequence
}
console.log(fibonacci(1))

module.exports = fibonacci;