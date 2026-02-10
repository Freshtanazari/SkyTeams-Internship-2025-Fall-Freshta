function matrixMultiplication(matrixA, matrixB){
    /**
     * multiplies two matrices and returns the resulting matrix.
     * @param {number[][]} matrixA - the first matrix
     * @param {number[][]} matrixB - the second matrix
     * @return {number[][]} - the resulting matrix after multiplication 
     * @throws {TypeError} - when the inputs are not valid matrices
     */
    if(!Array.isArray(matrixA) || !Array.isArray(matrixB) || !Array.isArray(matrixA[0]) || !Array.isArray(matrixB[0])){
        throw new TypeError("Both inputs must be matrices (2d Arrays)");
    }
    if(matrixA[0].length != matrixB.length){
        throw new Error("Number of columns in the first matrix must be equal to the number of rows in the second matrix");
    }

    const result = [];
    for(let i = 0; i < matrixA.length; i++){
        let row = [];
        for(let j = 0; j < matrixB[0].length; j++){
            let sum = 0;
            for(k = 0; k < matrixA[i].length; k++){
                sum += matrixA[i][k] * matrixB[k][j]
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

console.log(matrixMultiplication([[1,2],[3,4]], [[5,6],[7,8]]))

// [[19,22],[43,50]]