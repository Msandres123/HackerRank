function compareStrings(s, t) {
    let sArr = [];
      let tArr = [];
      for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
          sArr.pop();
        } else {
          sArr.push(s[i]);
        }
      }
      for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
          tArr.pop();
        } else {
          tArr.push(t[i]);
        }
      }
      s = sArr.join("")
     t = tArr.join("")
     console.log(s)
     console.log(t)
        if (s === t) {
          return 1
        } else return 0
        
       
    }
    
    let s1 = 'hacc#kk#'
    let s2 = 'hb##ackk##'
    
    console.log(compareStrings(s1, s2))