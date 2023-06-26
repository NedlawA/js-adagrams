import { LETTER_SCORE, LETTER_POOL } from './gameConstants';

export const drawLetters = () => {
  const letters = [];
  const letterPool = Object.keys(LETTER_POOL);
  while (letters.length < 10) {
    const random = Math.floor(Math.random() * letterPool.length);
    const addLetter = letterPool[random];
    if (letters.filter(x => x === addLetter).length < LETTER_POOL[addLetter]) {
      letters.push(addLetter);
    }
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  const availableLetters = {};
  lettersInHand.forEach(item => {
    if (availableLetters[item]) { availableLetters[item]++; }
    else { availableLetters[item] = 1; }
  });
  const letters = {};
  for (const letter of word) { letters[letter] = letters[letter] + 1 || 1; }
  for (const char in letters) {
    console.log(char);
    if (!(letters[char] <= availableLetters[char])) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  word = word.toUpperCase();
  for (let letter of word) {
    score += LETTER_SCORE[letter];
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let highScore = 0;
  let winningWord = '';
  words.forEach(word => {
    let score = scoreWord(word);
    if (score > highScore) {
      highScore = score;
      winningWord = word;
    } else if (score === highScore) {
      if ((word.length === 10 || word.length < winningWord.length) && winningWord.length != 10) {
        winningWord = word;
      }
    }
  });
  return { score: highScore, word: winningWord };
};