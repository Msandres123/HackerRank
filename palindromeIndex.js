function palindromeIndex(s) {
    const isPal = (str) => {
        let rev = str.split('').reverse().join('');
        if (rev === str) {
            return true;
        }
    }
        if (isPal(s)) {
            return -1;
        } else {
            for (let i = 0; i < s.length / 2; i++) {
                if (s[i] !== s[s.length - i -1]) {
                    let strA = s.split('');
                    strA.splice(i, 1)
                    strA = strA.join('')
                    let strB = s.split('')
                    strB.splice(s.length - i - 1, 1)
                    strB = strB.join('')
                    if (isPal(strA)) return i
                    if (isPal(strB)) return s.length - i - 1
                }
            }
        }
        return -1;
    }

    let s = 'hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh';
    console.log(palindromeIndex(s));
