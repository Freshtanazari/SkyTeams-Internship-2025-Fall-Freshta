function setMatrixZero(arr){
    /**
     * returns a matrix
     */
    // check if 2d array 
    rowsNum = arr.length
    colsNum = arr[0].length
    let firstRow = false;

    for(let i = 0; i <arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] == 0){
                console.log("this too has run")
                    arr[0][j] = 0;
                    if(i > 0){
                        arr[i][0] = 0; 
                    }else{
                        firstRow = true
                    }
                }
        }
    }
    for (let i = 1; i < rowsNum; i++){
        for(let j = 1; j < colsNum; j++){
            if(arr[0][j] == 0 || arr[i][0] == 0){
                arr[i][j] = 0
            }
        }
    }
    if(arr[0][0] == 0 ){
        for(let i = 0; i < rowsNum; i++){
            arr[i][0] = 0 
        }
    }
    if(firstRow){
        for(let j = 0; j < colsNum ; j++){
            arr[0][j] = 0;
        }
    }

    return arr
}

console.log(setMatrixZero([
  [1, 2, 3],
  [0, 5, 6],
  [7, 8, 9]
]))