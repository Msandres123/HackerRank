function extraLongFactorials(n) {
    // Write your code here
  let result = BigInt(1);
  n = BigInt(n)
for (let i = n; i > 0; i-- ) {
   result = result * i 
  }
console.log(result.toString())
}

console.log(extraLongFactorials(45))