function utopianTree(n) {
    // Write your code here
    let result = []
   let height = 1
   let cycles = 1 
   for (let i = 0; i < n.length; i++) {
   let range = n[i] 
   while(cycles <= range) {
     if(cycles%2===0){
       height++
     } else {
       height*=2
      
     }
    
     cycles++
   }
  result.push(height)
   }
return result
}
let n= [0,1]
console.log(utopianTree(n))