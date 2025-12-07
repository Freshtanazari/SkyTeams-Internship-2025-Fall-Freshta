function freqCounter(arr, item){
    /**
     * returns the count of occurances of an element in an array
     * @param {Array} arr - the input array
     * @param {any} item - the element to be counted
     * @return {number} - the count of occurances of an element 
     * @throws {TypeError} - if the input is not an array 
     * 
     */
    if (!Array.isArray(arr)){
        throw new TypeError("Input must be an array");
    }
    let count = 0; 
    let i = 0; 
    while (i < arr.length){
        if (arr[i] === item){
            count ++; 
        }
    }
    return count;
}