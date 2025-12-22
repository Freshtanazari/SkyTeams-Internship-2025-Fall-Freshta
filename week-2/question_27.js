function uniqueArr(arr){
    /**
     * takes an array and returns only its unique elements with time complexity of O(n^2) and space complexity of O(n)
     * while we can use set here, i tried another method.
     * @param {Array} arr - the input array
     * @returns {Array} - the unique set 
     * @throws {TypeError} - if the input is not an array
     * 
     */
    if(!Array.isArray(arr)){
        throw new TypeError("Only enter an array");
    }
    
    let uniqueItems = [];
    for(let i = 0; i < arr.length; i++){
        let found = false;
        for(let j = 0; j < uniqueItems.length; j++){
            if (arr[i] === uniqueItems[j]){
                found = true;
                break;
            }
        }
        if(!found){
                uniqueItems.push(arr[i]);
        }
    }
    return uniqueItems
}

module.exports = uniqueArr;
