function workbook(n, k, arr) {
    // Write your code here
    let page = 1;
    let count = 0;
    for (let i = 0; i < n; i++) {
      let problem = 1
      while (problem <= arr[i]) {
        if (problem === page) {
          count++
        }
         if (problem%k===0 && problem !== arr[i]){
          page++
        }
      problem++
      }
      page++
    }
return count
}
//Should return 11
console.log(workbook(15,20,[1, 8, 19, 15, 2, 29, 3, 2, 25, 2, 19, 26, 17, 33, 22]))
//Should return 4
console.log(workbook(5,3,[4, 2, 6, 1, 10]))

