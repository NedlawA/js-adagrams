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
  // const avail_letters = Object.keys(LETTER_POOL);
  while (letters.length < 10) {
    const add_letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    // const add_letter = choose_letter[0]
    if (letters.filter(x => x = add_letter).length < LETTER_POOL[add_letter]) {
      letters.push(add_letter);
    }
  };
  return letters
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const available_letters = [...lettersInHand];
  const word = input.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    console.log(word[i])
    if (!(word[i] in available_letters)) {
      return false;
    } else {
      available_letters.filter(letter => letter != word[i]);
    }
  }
  return true
};

export const scoreWord = (word) => {
  let score = 0;
  for (let i = 0; i < word.length; ++i){
    score += LETTER_SCORE[word[i].toUpperCase]
  }
  if (word.length >= 7){
    score+=8
  }
  return score
};

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
