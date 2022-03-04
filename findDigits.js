function findDigits(n) {
    // Write your code here
    let count = 0
    let d = (""+n).split('').map((int) => parseInt(int, 10))
    for (let i = 0; i < d.length; i++) {
     if (n%d[i] === 0) {
      count++
    }
  
    }
    
  return count 
}

console.log(findDigits(1012))