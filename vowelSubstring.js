function findSubstring(s, k) {
    if (!/[aeiou]/.test(s)) {
        return "Not found!"
    }
    let arr = []
    let maxCount = 0
    let maxStr = ""
     for (let i = k; i < s.length; i++) {
         arr.push(s.slice(i-k, i))
     }
     arr.push(s.slice(s.length - k))
     arr.forEach(string => {
        if (string.replace(/[^aeiou]/ig, "").length > maxCount) {
            maxCount = string.replace(/[^aeiou]/ig, "").length 
            maxStr = string
        }  
     })
 
     return maxStr
 }
 
 let s = ''
 let k = 5
 
 console.log(findSubstring(s,k))
 