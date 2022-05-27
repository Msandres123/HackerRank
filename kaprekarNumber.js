function kaprekarNumbers(p, q) {
    // Write your code here
    let range = []
    let arr = []
    while (p <= q) {  //While loop that creates inclusive range between p and q 
      range.push(p)
      p++
    }
  for (let i = 0; i < range.length; i++){
      let sqrdArr = (""+range[i]**2).split("") //gets the squared value of the integer and turns it into an array
      let mid = Math.floor(sqrdArr.length/2) //finds the middle of the array
      let first = +sqrdArr.slice(0,mid).join("") // the first half of the array
      let second = +sqrdArr.slice(mid).join("") //the second half of the array 
      let sum = first + second
      if (sum === range[i]) { 
        arr.push(range[i])
      }
  }
  if (arr.length < 1) {
    console.log("INVALID RANGE")
  }
  console.log(arr.join(" "))
}

let p = 1
let q = 300
console.log(kaprekarNumbers(p, q))
