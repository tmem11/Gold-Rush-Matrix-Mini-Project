/* Write your code below */
class Matrix {
    constructor(numRows, numColumns) {
        this.matrix=[]
        this.generateMatrix(numRows,numColumns)

    }
    generateMatrix(numRows, numColumns) {   
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                this.matrix[r].push(".")
            }
        }
        this.matrix[0][0]=1
            this.matrix[numRows-1][numColumns-1]=2
        
    }
    alter(r, c, v) {
        this.matrix[r][c] = v
    }
    get (rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
     print() {

        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    findCoordinate(value){
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
              if(this.matrix[i][j]==value){
                  return {x:j,y:i}
              }
            }
          
        }

    }
}
let m = new Matrix(3, 4)





//You can paste the code from the lesson below to test your solution




/* Do not remove the exports below */
// module.exports= Matrix