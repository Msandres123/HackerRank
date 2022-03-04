function caesarCipher(s, k) {
    // Write your code here
    if (k > 26) { k -= 26 * Math.floor(k / 26) } // k = k%26 is the same
    const strArr = s.split('');
    let final = strArr.reduce((acc, val) => {
        const code = val.charCodeAt(0);
        const isLower = code <= 122 && code >= 97
        const isUpper = code >= 65 && code <= 90
        if (isLower) {
            if (code + k > 122) {
                return acc + String.fromCharCode(code - (26 - k));
            } else {
                return acc + String.fromCharCode(code + k);
            }
        } else if (isUpper) {
            if (code + k > 90) {
                return acc + String.fromCharCode(code - (26 - k))
            } else {
                return acc + String.fromCharCode(code + k);
            }

        }
        else {
            return acc + String.fromCharCode(code)
        }

    }, '');

    return final
}

let s = "6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr"
let k = 87