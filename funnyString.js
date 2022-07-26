function funnyString(s) {
    // Write your code here
    let charCode = s.split("").map(item => item.charCodeAt())
    let rev = charCode.slice().reverse()
    //function to subtract one array item from the next
    const subtract = (array) => {
        let results = []
        for (let i = 0; i < array.length - 1; i++) {
            let j = i + 1
            results.push(Math.abs(array[j]- array[i]))
        }
        return results.toString()
    }
    if (subtract(charCode) === subtract(rev)) {
        return "Funny"
    } else {
        return "Not Funny"
    }

}


let s = "acxz"
console.log(funnyString(s))