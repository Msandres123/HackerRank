function hackerrankInString(s) {
    // Write your code here
    let hacker = "hackerrank"
    let hackInd = 0
    let finalStr = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === hacker[hackInd]) {
            finalStr+= hacker[hackInd]
            hackInd++
        }
    }
    if(finalStr === hacker) {
        return "YES"
    }
    return "NO"
}

let s = "rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"

console.log(hackerrankInString(s))