function hackerrankInString(s) {
    // Write your code here
    let hackArr = ["h", "a", "c", "k", "e", "r", "r", "a", "n", "k"]
    let hackInd = 0
    let finalArr = []
    let sArr = s.split("")
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === hackArr[hackInd]) {
            finalArr.push(sArr[i])
            hackInd++
        }
    }
    if(finalArr.toString() === hackArr.toString()) {
        return "YES"
    }
    return "NO"
}

let s = "rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"

console.log(hackerrankInString(s))