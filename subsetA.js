function subsetA(arr) {
    let halfSum = 0;
    let n = arr.length
         for (let i = 0; i < n; i++)
             halfSum += arr[i];  
         halfSum = parseInt(halfSum / 2, 10);
  
         // sort the array in descending order.
         arr.sort(function(a, b){return b - a});
      
  
         let res = [], curr_sum = 0;
         for (let i = 0; i < n; i++) {
  
             curr_sum += arr[i];
            res.push(arr[i]) 
             // current sum greater than sum
             if (curr_sum > halfSum) 
                  
                 return res.sort;
         }
       
 }
 
 let arr = [1,4,2,2,8,7,4,3]
 
 console.log(subsetA(arr))