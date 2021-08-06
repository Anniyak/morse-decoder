const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let answer = '';
  const pattern = new RegExp(".{1,10}", "ig");
  const letters = expr.match(pattern);
  letters.forEach(letter => {
    if (letter === '**********') answer = answer + ' ';
    else {
      let morseLetter = '';
      for (let i = 0; i < letter.length - 1; i = i + 2) {
        if (letter[i] + letter[i + 1] === '11') morseLetter = morseLetter + '-';
        if (letter[i] + letter[i + 1] === '10') morseLetter = morseLetter + '.';
      }
      answer = answer + MORSE_TABLE[morseLetter];
    }
  });
  return answer;
}

module.exports = {
  decode
}
