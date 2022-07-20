function pangrams(s) {
    // Write your code here
    let arr = s.toLowerCase().split("")
    let alphaArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
    let i = 0
    while (i < 26) {
        if (!arr.includes(alphaArray[i])) {
            return "not pangram"
        }
        i++
    }
    return "pangram"
}
let s = "We promptly judged antique ivory buckles for the prize"
console.log(pangrams(s))