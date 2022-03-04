function diagonalDifference(arr) {
    // Write your code here
    let d1 = 0;
    let d2 = 0;
    let j = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
            d1+=arr[i][i]
            d2+=arr[i][j]
            j--
    }
    return Math.abs(d1-d2)

}
let arr = [
[-1, 1, -7, -8],
[-10, -8, -5, -2],
[0, 9, 7, -1],
[4, 4, -2, 1]
] 

console.log(diagonalDifference(arr))