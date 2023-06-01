import { LETTER_POOL } from "../test/adagrams.test";

const LETTER_SCORE = {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'W': 4,
  'X': 8,
  'Y': 4,
  'Z': 10
}

export const drawLetters = () => {
  const letters = [];
  while (letters.length < 10) {
    const add_letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    if (letters.filter(x => x === add_letter).length < LETTER_POOL[add_letter]) {
      letters.push(add_letter);
    }
  };
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
  for (let word of words) {
    let score = scoreWord(word)
    if (score > highScore) {
      highScore = score;
      winningWord = word;
    } else if (score === highScore) {
      if ((word.length === 10 || word.length < winningWord.length) && winningWord.length != 10) {
        winningWord = word;
      }
    }
  }
  const result = { "score": highScore, "word": winningWord };
  return result;
}