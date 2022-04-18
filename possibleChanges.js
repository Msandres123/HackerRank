function possibleChanges(usernames) {
    let results = []
    let len = 0
    usernames.forEach(name => {
        let nameArr = name.split("")
        for (let i = 0; i < nameArr.length; i++){
            for (let j = i + 1; j < nameArr.length; j++){
            if (nameArr[i] > nameArr[j]) {
                results.push("YES")
                break;
            }
            
        } 
        if (results[i] === "YES") {
            break  
        }
 
        } 
         if (results.length <= len) {
            results.push("NO") 
            len++
            }
    })


    return results
}

let usernames = ["foo", "bar", "baz", "hydra"]
console.log(possibleChanges(usernames))

