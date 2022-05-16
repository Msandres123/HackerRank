function flatlandSpaceStations(n, c) {
    let maxDist = 0
    for (let i = 0; i < n; i++) {
      let arr = []
      for (let j = 0; j < c.length; j++){
        let dist = Math.abs(i - c[j])
        arr.push(dist)
      }
       if (Math.min(...arr) > maxDist){
          maxDist = Math.min(...arr)
        }
    }
  return maxDist
  }
  //Should return 0
  console.log(flatlandSpaceStations(6, [0,1,2,3,4,5]))
  //Should retrun 2
  console.log(flatlandSpaceStations(5,[0,4]))