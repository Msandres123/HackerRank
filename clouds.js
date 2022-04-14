function jumpingOnClouds(c) {
  // Write your code here
  let count = 0;
  let int = 0;
  while (int < c.length - 2) {
    if (c[int + 2] === 1) {
      int++;
      count++;
    } else {
      count++;
      int += 2;
    }
  }

  if (int === c.length - 2) {
    count++;
  }
  return count;
}
