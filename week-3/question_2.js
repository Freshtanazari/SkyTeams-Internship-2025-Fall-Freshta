function merge(arr1, arr2){
    /**
     * return the merged sorted array of two sorted array
     * @param {Array} arr1 - first sorted array
     * @param {Array} arr2 - second sorted array
     * @return {Array} - merged sorted array
     * @throws {TypeError} - if the inputs are not arrays or if the inputs are not numbers
     */
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        throw new TypeError("Both inputs must be arrays");
    }
    
    let merged = [];
    let i = 0;
    let j =  0;

    while(i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[i]){
            merged.push(arr1[i]);
            i++;
        }else if(arr2[j] < arr1[i]){
            merged.push(arr2[j]);
            j++;
        }
    }
    // add the remainder of the arrays

    while(i < arr1.length ){
        merged.push(arr1[i])
        i++;
    }
    while( j < arr2.length){
        merged.push(arr2[j])
        j++;
    }
    return merged
}

console.log(merge([1, 3, 9], [4, 5, 6]))