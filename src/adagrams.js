import { LETTER_SCORE, LETTER_POOL } from './gameConstants';

export const drawLetters = () => {
  const letters = [];
  while (letters.length < 10) {
    const addLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    if (letters.filter(x => x === addLetter).length < LETTER_POOL[addLetter]) {
      letters.push(addLetter);
    }
  }
  return letters
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const availableLetters = [...lettersInHand];
  const word = input.toUpperCase();
  for (const letter of word) {
    if (!(availableLetters.includes(letter))) {
      return false;
    } else {
      availableLetters.splice(word[letter], 1);
    }
  }
  return true
};

export const scoreWord = (word) => {
  let score = 0;
  word = word.toUpperCase()
  for (let letter of word) {
    let letterScore = LETTER_SCORE[letter];
    score += letterScore;
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
  })
  return { score: highScore, word: winningWord };
}