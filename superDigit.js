function superDigit(n, k) {
    // Write your code here
const addItUp = num => { 
 num = num.toString().split('')
    num = num.map(Number)
    num = num.reduce((a,b) => a + b, 0)
    return num
   } 
   n = addItUp(n)
    if (n * k < 10) {
        return n * k
    } else {
        for (let i = 0; i < k; i++) {
            n = addItUp(n)
            if (n * k < 10) {
                return n * k
            } else {
                n*=k
                n = addItUp(n)
                return n
            }
        }
    }
}


console.log(superDigit(4757362, 10000))
