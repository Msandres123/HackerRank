function miniMaxSum(arr) {
    // Write your code here
    let min = arr.sort((a, b) => a - b).slice(0, -1).reduce((a, b) => a + b)
    let max = arr.sort((a, b) => b - a).slice(0, -1).reduce((a, b) => a + b)
    console.log(min, max)
}
let arr = [1, 3, 5, 7, 9,]
console.log(miniMaxSum(arr))

