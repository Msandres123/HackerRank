function birthday(s, d, m) {
    // Write your code here
   let matches = 0;
   for (let i = 0; i < s.length; i++){
  //  let subArray = s.slice(i, i+m)
   let sum = s.slice(i, i+m).reduce((prev, curr) => prev + curr)
   if (sum === d) matches++
    }
    return matches
   }

let arr = [1,1,1,1,1]
let day = 3
let month = 2

console.log(birthday(arr,day, month))