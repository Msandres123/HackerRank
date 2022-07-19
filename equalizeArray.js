function equalizeArray(arr) {
  // Write your code here
  let occurence = 0;
  arr.forEach((num) => {
    let len = arr.filter((item) => item === num).length;
    if (len > occurence) {
      occurence = len;
    }
  });
  return arr.length - occurence;
}

let arr = [3, 3, 2, 1, 3];

console.log(equalizeArray(arr));
