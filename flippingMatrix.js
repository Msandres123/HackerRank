function flippingMatrix(matrix) {
    let len = matrix.length;
    let half = len/2
    let sum = 0

    for (let i = 0; i < half; i++) {
        for (let j = 0; j < half; j++){
         sum += Math.max(matrix[i][j], 
         matrix[i][len-j-1],
         matrix[len-i-1][j], 
        matrix[len-i-1][len-j-1])
        }
       
    }
    return sum

}

let matrix = [[107, 54, 128, 15], [12, 75, 110, 138], [100, 96, 34, 85], [75, 15, 28, 112]]

console.log(flippingMatrix(matrix))