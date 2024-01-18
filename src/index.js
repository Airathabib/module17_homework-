/**
 * Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для его повторения. Например, если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3" на одной строке. 
 */

function repeatWord(word, count = 1) {
  let answer = '';
  if (count <= 1) return 'Error';
  if (typeof word !== 'string') return 'Please enter word';
  for (let i = 1; i <= count; i++) {
    if (i === count) {
      answer += `${word + i}`;
    } else {
      answer += `${word + i}, `;
    }
  }
  return answer
};

module.exports = repeatWord;
