function collatzSeq(num){
    /**
     * returns a collatz sequence
     * @param {number} num - the given input number
     * @return {Array} - a sequence
     * @throws {TypeError} - if the input is not an integer above 0
     */
    if (! Number.isInteger(num)){
        throw new TypeError("Make sure you enter an integer")
    }
    if(num <= 0 ){
        throw new TypeError("Integer 0 or negative are not valid for collatz sequence");
    }
    sequence = [num];
    steps = 0;
    while(num != 1){
        if(num % 2 == 0){
            num = num / 2;
            sequence.push(num);
            steps++;
        }else{
            num = num * 3 + 1;
            sequence.push(num);
            steps++;
        }
    }
    return sequence + ' (Steps: ' + steps + ")";
}

module.exports = collatzSeq;
console.log(collatzSeq(6))