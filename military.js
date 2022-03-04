function timeConversion(s) {
    // Write your code here
    if (s.includes("PM") && !s.includes("12")){
      
     let num = s.split("PM")
    let time = num[0].split(":")
      let mil = parseInt(time[0]) + 12
      time.shift()
      time.unshift(mil)
      return time.join(":")
    }
    
    else if (s.includes("AM") && s.includes("12")){
      let num = s.split("AM")
      let time = num[0].split(":")
       time.shift()
      time.unshift("00")
      return time.join(":")
    }

    else if (s.includes("AM")){
      return s.split("AM")[0]
    }

    else {
      return s.split("PM")[0]
    }


}

let time = "12:40:45AM"

console.log(timeConversion(time))