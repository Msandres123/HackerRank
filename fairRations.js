function fairRations(b){
    //write your code here
    let total = b.reduce((a,b) => a + b)
    if (total%2!==0){
      return "NO"
    }
    let count = 0;
    for (let i = 0; i < b.length; i++){
      if (b[i]%2!==0){
        b[i]+=1
        b[i+1]+=1
        count+=2
      }
    }
    return count
  }
  //Should Return 4
  console.log(fairRations([2, 3, 4, 5, 6]))
  //Should return NO
  console.log(fairRations([1,2]))
  