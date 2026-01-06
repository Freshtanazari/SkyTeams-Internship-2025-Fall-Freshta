function intersection(arr1, arr2){
    // throw an error if not an array
    if(!Array.isArray(arr1) | ! Array.isArray(arr2)){
        throw new TypeError("The inputs must be arrays")
    }
    let repetitedElements = [];

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                repetitedElements.push(arr1[i]);
                continue;
            }
        }
    }
    return repetitedElements;
}
console.log(intersection([1, 2, "b", 4], ["b", 4, 5, 6]))