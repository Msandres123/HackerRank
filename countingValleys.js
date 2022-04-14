function countingValleys(s,p) {
    let valleys = 0
    let seaLevel = 0
    for (let i = 0; i < s; i++) {
        if (p[i] === "U") {
            seaLevel++
            if (seaLevel === 0) {
            valleys++
        }
        } 
         else {
            seaLevel--
        } 
        
    }
    return valleys
}

let s = 8

let p = ["U", "D", "D","D", "U", "D", "U", "U"]

console.log(countingValleys(s,p))