function squares(a,b) {
    let square = 0, i = 1, count = 0;
    while (square <= b) {
        square = i * i 
        if (square >= a && square <= b) {
            count++
        }
        i++
    }

    return count
}

let a = 3
let b = 9

console.log(squares(a,b))