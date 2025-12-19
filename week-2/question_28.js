function rmDuplicates(arr){
    /**
     * returns an array after removing duplicates with time and space complexity of O(n) 
     * @param {Array} arr - the input array 
     * @returns {Array} - array after removal of the duplicates
     * @throws {TypeError} - if the input is not an array
     */
    if(!Array.isArray(arr)){
        throw new TypeError("Only enter an array")
    }
    let uniqueItems = new Set(arr)
    return Array.from(uniqueItems);
}

// console.log(rmDuplicates([]))
module.exports = rmDuplicates; 