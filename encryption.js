function encryption(s) {
    let col = Math.ceil(Math.sqrt(s.length)) 
    let newStr = ""
    for (let i = 0; i < col; i++) {
        let jump = 0;
        while (i + jump < s.length){
            console.log(i+jump)
            newStr+= s[i+jump]
            jump+=col
        }
        newStr+= " "
    }
return newStr
    
}

let s = "haveaniceday"
console.log(encryption(s))