function plusMinus(arr) {
    let posArr = []
    let negArr = []
    let zeroArr = []
    let len = arr.length

    arr.forEach(int => {
        if (int > 0) {
            posArr.push(int)
        } else if (int < 0){
            negArr.push(int)
        } else {zeroArr.push(int)}
    })

    let pos = (posArr.length/len).toFixed(6)
    let neg = (negArr.length/len).toFixed(6)
    let zero = (zeroArr.length/len).toFixed(6)
    let result = [pos, neg, zero]
    console.log(result[0])
    console.log(result[1]) 
    console.log(result[2])

}
let arr = [-4, 3, -9, 0, 4, 1]
console.log(plusMinus(arr))