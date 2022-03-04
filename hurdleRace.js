function hurdleRace(k, height) {
    // Write your code here
    let maxHeight = Math.max(...height)
    if (k > maxHeight) {
        return 0
    } else {
        return maxHeight - k
    }

}
let k = 4
let height = [1,6,3,5,4]
console.log(hurdleRace(k, height))