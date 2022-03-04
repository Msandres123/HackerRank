function timeConversion(s) {
    let miliTime;
        let splitTime = s.split(":")
        let hour = splitTime[0]
        let min = splitTime[1]
        let sec = splitTime[2]
        if (s.includes("12")) {
            if (s.includes("AM")) {
                hour = "00"
                sec = sec.split("A")[0]
                miliTime = `${hour}:${min}:${sec}`
            } else if (s.includes("PM"))
                sec = sec.split("P")[0]
            miliTime = `${hour}:${min}:${sec}`
    
        }
        else if (s.includes("PM")) {
            hour = +hour + 12
            sec = sec.split("P")[0]
            miliTime = `${hour}:${min}:${sec}`
        }
        else  {
            sec = sec.split("A")[0]
            miliTime = (`${hour}:${min}:${sec}`)
    
        }
        return miliTime
    
    }
    
    let s = "06:40:03AM"
    console.log(timeConversion(s))