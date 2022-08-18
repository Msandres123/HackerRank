function serviceLane(width, cases) {
    // Write your code here
    
    let results = []
    for (let i = 0; i < cases.length; i++) {
        results.push(Math.min(...width.slice(cases[i][0], cases[i][1]+1)))

        }
        return results
}

let width = [2, 3, 1, 2, 3, 2, 3, 3]
let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]

console.log(serviceLane(width, cases))