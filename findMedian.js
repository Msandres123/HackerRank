function findMedian(arr) {
    let sorted = arr.sort((a,b) => a - b)
    return sorted[Math.floor(sorted.length/2)]
}
let arr =[0,1,2,4,6,5,3]
console.log(findMedian(arr))