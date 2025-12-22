function findIn(arr, item){
    /**
     * returns true of false based on if an element exists in an array
     * @param {Array} arr - input array
     * @param {any} item - an element to be searched for
     * @return {boolean} - true if the element exists, false if it doesnt
     * @throws {TypeError} - if the input is not an array
     */
    if(!Array.isArray(arr)){
        throw new TypeError("The first parameter should be an array");
    }
    let i = 0;
    while (i < arr.length){
        if (arr[i] === item){
            return true; 
        }
        i++;
    }
    return false;
}
module.exports = findIn;

