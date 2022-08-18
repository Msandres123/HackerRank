function timeInWords(h, m) {
  // Write your code here
  var ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  var tens = ['', '', 'twenty'];
  var teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const convertTens = (num) => {
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else {
      return tens[Math.floor(num / 10)] + ' ' + ones[num % 10];
    }
  };

  if (m === 0) {
    return `${convertTens(h)} o' clock`;
  }

  if (m === 45) {
    h += 1;
    return `quarter to ${convertTens(h)}`;
  }

  if (m === 15) {
    return `quarter past ${convertTens(h)}`;
  }

  if (m === 30) {
    return `half past ${convertTens(h)}`;
  }

  if (m > 30) {
    h += 1;
    m = 60 - m;
    return `${convertTens(m)} minutes to ${convertTens(h)}`;
  } else {
    if (m === 1) {
      return `${convertTens(m)} minute past ${convertTens(h)}`;
    }
    return `${convertTens(m)} minutes past ${convertTens(h)}`;
  }
}

console.log(timeInWords(4, 1));
