function pascalTriangle(num){
    /**
     * returns the pascal triangle for the given input as lines
     * @param {integer} num - the given input 
     * @returns {string} - Pascal triangle of specified lines
     * @throws {TypeError} - if the input is not an integer or postive integer
     */
    if(! Number.isInteger(num) | num < 0){
        throw new TypeError("if the input is a not a positive integer");
    }

    let arrRows=[];
    for(let i = 0 ; i < num; i++){
        let row =[];
        row.push(1);
        if(i > 1){
            for(let j = 0; j < arrRows[i-1].length -1; j++){
                row.push(arrRows[i-1][j] + arrRows[i-1][j+1])
            }
        } 
        if(i > 0){
            row.push(1);
        }
        arrRows.push(row);
    }return arrRows;
}

module.exports = pascalTriangle;