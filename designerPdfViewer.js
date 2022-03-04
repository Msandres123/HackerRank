function designerPdfViewer(h, word) {
    let arr = []
    let wordArr = word.split("")
    let len = wordArr.length
    for (let i = 0; i < len; i++) {
       arr.push(h[wordArr[i].charCodeAt(0)-97])
    }
     let max = Math.max(...arr)
     let min = Math.min(...arr)
     return max * min * len
   
    }
   
   let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
   let word = 'zaba'
   console.log(designerPdfViewer(h, word))