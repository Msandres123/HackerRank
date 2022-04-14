function repeatedString(s, n) {
    // Write your code here
    let arr = s.split("")
    let count = arr.filter((item) => item === "a").length * Math.floor(n/s.length)
  if (n % s.length !== 0) {
        for (let i = 0; i < n % s.length; i++) {
            if(s[i] === "a") count++
        }
  }
    return count

}


let s = "aba"
let n = 10


console.log(repeatedString(s, n))