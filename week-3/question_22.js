function mergeOverlappingIntervals(arr){
    /**
     * returns only the unique intervals
     * @param {Array} arr- the input given as an array
     * @return {Array} - returns all distinct intervals
     * @throws {TypeError} - if input is not an array or if the input intervals dont have a number
     */

    // sorting the intervals before detecting their overlap
    arr.sort((a,b) => a[0] - b[0]); // giving a comparison function to compare only the first element of each interval

    let newInterval = [];
    let currentInterval = arr[0];

    for(let i = 1 ; i < arr.length ; i++){
            let start = Math.max(currentInterval[0], arr[i][0])
            let end = Math.min(currentInterval[1], arr[i][1])
            if(start <= end){
                console.log("overlap exists")
                let mergedInterval = [Math.min(currentInterval[0], arr[i][0]),Math.max(currentInterval[1], arr[i][1]) ];
                currentInterval = mergedInterval;
            }else{
                newInterval.push(currentInterval);
                currentInterval = arr[i]
            }
        }
        newInterval.push(currentInterval)
        return newInterval; 
}


console.log(mergeOverlappingIntervals([[1,2], [3,4], [5,6]]))