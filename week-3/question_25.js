function setMatrixZero(arr){
    /**
     * returns a matrix
     */
    // check if 2d array 
    rowsNum = arr.length-1
    colsNum = arr[0].length-1

    for(let i = 0; i <arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            console.log("this too has run")
            if(arr[i][j] == 0){
                arr[0][j] = 0;
                arr[i][0] = 0;  
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
        if(arr[0][j]==0 && arr[i][0]==0){
            console.log("this has run")
            for(let row = 0; row <= rowsNum; row++){
                arr[row][j] = 0
            }
            for(let col = 0; col <= colsNum; col++){
                arr[i][col] = 0
            }
        }
        }
    }
    return arr
}

console.log(setMatrixZero([
 [1, 2, 0],
 [4, 5, 6],
 [0, 8, 9]
]))