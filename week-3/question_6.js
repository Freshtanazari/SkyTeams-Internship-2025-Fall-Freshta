function binarySearch(arr, target){
    if(!Array.isArray(arr)){
        throw new TypeError("input must be an array")
    }
    let start = 0; 
    let end = arr.length - 1;

    while(start <= end ){
        let half = Math.floor((start + end) / 2);
        if(arr[half] === target){
            return "found index at "  + half
        // if target is greater than the first half
        }else if(arr[half] < target ){
            // search the second half
            start = half + 1; 
        }else if (arr[half] > target){
            end = half -1  ;
        }
    }
    return "not found"
}
console.log(binarySearch([1, 3, 5, 6, 7, 8 ], 9))