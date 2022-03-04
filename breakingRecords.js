function breakingRecords(scores) {
    // Write your code here
    let min = scores[0]
    let max = scores[0]
    let minCount = 0
    let maxCount = 0
   for (let i = 0; i < scores.length; i++) {
       if(scores[i] < min) {
           console.log(min)
           min = scores[i]
           minCount++
       } if (scores[i] > max) {
           console.log(max)
           max = scores[i]
           maxCount++
       }
   }
   return [maxCount, minCount]
}
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1,]
console.log(breakingRecords(scores))