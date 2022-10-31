'use strict';

function repeatedWord(string) {
  let wordsArray = string.toLowerCase().replace(/\W/g, ' ').split(' ').filter(s => s.trim() !== '');

  let map = new Map();
  let temp = '';
  let answer = null;

  for (let i = 0; i < wordsArray.length; i++) {
    temp = wordsArray[i];
    if (map.has(temp)){
      answer = temp;
      return answer;
    } else {
      map.set(temp, true);
    }
    temp = '';
  }
}

let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

console.log(repeatedWord(string));

module.exports = repeatedWord;
