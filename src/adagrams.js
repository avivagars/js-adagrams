const letterPool = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const letterValues = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 2,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

export const drawLetters = () => {
  let hand = [];
  let letterPoolList = [];

  // letterPoolList contains all available letters that player can select from
  for (const [key, value] of Object.entries(letterPool)) {
    for (let i = 0; i < value; i++) {
      letterPoolList.push(key);
    }
  }

  // helper function to select a random letter from letterPoolList
  const selectRandomLetter = (letterPoolList) => {
    let letter =
      letterPoolList[Math.floor(Math.random() * letterPoolList.length)];
    return letter;
  };

  // builds a hand of 10 random letters
  for (let i = 0; i < 10; i++) {
    const letter = selectRandomLetter(letterPoolList);
    hand.push(letter);
    let index = letterPoolList.indexOf(letter);
    letterPoolList.splice(index, 1);
  }
  return hand;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  
  for (let i = 0; i < input.length; i++) {
    if (lettersInHand.includes(input[i])) {
      let index = lettersInHand.indexOf(input[i]);
      lettersInHand.splice(index, 1);
    } else {
      return false;
    }
  }
  // returns true only if all letters in input are available in lettersHand
  return true;
};


export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += letterValues[word.toUpperCase()[i]];
  }
  if (word.length > 6) {
    score += 8;
  }
  return score;
};


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let score = scoreWord;
  let winner = { word: "", score: 0 };
  
  for (let i = 0; i < words.length; i++) {
    if (score(words[i]) > winner["score"]) {
      winner["word"] = words[i];
      winner["score"] = score(words[i]);
    } else if (
      score(words[i]) === winner["score"] &&
      winner["word"].length != 10
    ) {
      if (words[i].length === 10) {
        winner["word"] = words[i];
        winner["score"] = score(words[i]);
      } else if (words[i].length < winner["word"].length) {
        winner["word"] = words[i];
        winner["score"] = score(words[i]);
      }
    }
  }
  return winner;
};
