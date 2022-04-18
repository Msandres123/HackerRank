function chocolateFeast(n, c, m) {
    // Write your code here
    let count = Math.floor(n/c)
    let wrappers = count
    while (wrappers >= m) {
        let tradeIn = Math.floor(wrappers/m)
        wrappers = tradeIn + wrappers%m
        count+= tradeIn
    }
    
    
   return count
}
console.log(chocolateFeast(10, 2, 5))
console.log(chocolateFeast(12, 4, 4))
console.log(chocolateFeast(6, 2, 2))