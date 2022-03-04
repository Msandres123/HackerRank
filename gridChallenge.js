function gridChallenge(grid) {
    // Write your code here
   let  gridArr = []
for (let i = 0; i < grid.length; i++) {
    let sorted = grid[i].sort()
    gridArr.push(sorted)
}
 for (let i = 0; i < gridArr.length; i++) {
     let arr = []
     
     for (let j = 0; j < gridArr.length; j++) {
        arr.push(gridArr[j][i])  
     }
     let unSorted = arr.join("")
     let sorted = arr.sort().join("")
     if(sorted !== unSorted) {
         return "NO"
     } 
 }
    return "YES"
}
// let grid = [['e','a','b','c','d'], ['f','g','h','i','j'],['o','l','k','m','n'], ['t','r','p','q','s'],['x','y','w','u','v']]

// let grid = [['m','p','x','z'], ['a','b','c','d'],['w','l','m','f']]
let grid = [['k','c'], ['i','u']]
// let grid = [['u','f','x'], ['v','o','f'],['h','m','p']]
console.log(gridChallenge(grid))