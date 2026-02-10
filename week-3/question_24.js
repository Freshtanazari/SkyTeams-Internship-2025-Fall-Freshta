function kthLargest(arr, k){
    /**
     * returns the kth largest element of the array
     */
    // check if array 

    arr.sort((a, b) => b-a)
    return arr[k-1];
}
console.log(kthLargest([10, 7, 11, 5, 8], 1))