function lonelyinteger(a) {
    // Write your code here
    for (let i = 0; i < a.length; i++){
        if (a.filter(int => int === a[i]).length === 1) {
            return a[i]
        }
    }     
}

let a = [1,2,3,4,3,2,1]

console.log(lonelyinteger(a))