function isEqual(arr1, arr2){
    /**
     * compares two arrays for equality with time complexity of O(n) and space complexity of o(1)
     * @param {Array} arr1 - first array 
     * @param {Array} arr2 - second array
     * @return {boolean} - true if equal else false
     * @throws {TypeError} - if any of the inputs are not arrays
     */
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        throw new TypeError("Only enter arrays");
    }
    if(arr1.length === 0 & arr2.length ===0){
        return true;
    }
    if(arr1.length != arr2.length){
        return false;
    }

    for(let i = 0 ; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
                return false;
        }
    }
    return true;
}
console.log(isEqual([1, 2], [1, 3]));
module.exports = isEqual;