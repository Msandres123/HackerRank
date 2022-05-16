function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let count = 0;
    while (s >= p) {
      s-=p
      if (p - d > m) {
        p-=d
      } else {
        p = m
      }
      count++
    }
    return count
}
//Should return 9917
console.log(howManyGames(16, 2, 1, 9981))