function fizzBuzz(n){
    let arr =  Array(n).fill(1).map((x, y) => x + y)
    
    for (let i = 0; i < n; i++)
    if (arr[i]%3 === 0 && arr[i]%5 === 0) {
        console.log("FizzBuzz")
    } else if (arr[i]%3 === 0) {
        console.log("Fizz")
    } else if (arr[i]%5 === 0) {
        console.log("Buzz")
    } else console.log(arr[i])
}

console.log(fizzBuzz(20))