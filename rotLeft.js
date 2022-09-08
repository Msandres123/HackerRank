function rotLeft(a, d) {
    // Write your code here
   let rem = a.splice(0,d)
   for ( let i in rem){a.push(rem[i])}
   return a
}

let arr = [1,2,3,4,5]
let r = 4

console.log(rotLeft(arr, r) )