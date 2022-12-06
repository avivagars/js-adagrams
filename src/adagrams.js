class Adagrams {
  constructor() {
    this.letterPool = {
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

    this.letterValues = {
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
  }

  // Wave 01
  drawLetters = () => {
    const availableLettersPool = [];

    for (let [key, value] of Object.entries(this.letterPool)) {
      for (let i = 0; i < value; i++) {
        availableLettersPool.push(key);
      }
    }
    return this.selectRandomLetters(availableLettersPool);
  };

  // Helper function wave 01
  selectRandomLetters = (letters) => {
    const hand = [];

    for (let i = 0; i < 10; i++) {
      let letter = letters[Math.floor(Math.random() * letters.length)];
      hand.push(letter);
      let index = letters.indexOf(letter);
      letters.splice(index, 1); // removes letter from letters(list)
    }
    return hand;
  };

  // Wave 02
  usesAvailableLetters = (input, lettersInHand) => {
    for (let i = 0; i < input.length; i++) {
      if (lettersInHand.includes(input[i])) {
        let index = lettersInHand.indexOf(input[i]);
        lettersInHand.splice(index, 1);
      } else {
        return false;
      }
    }
    return true; // returns true only if all letters in input are available in lettersHand
  };

  // Wave 03
  scoreWord = (word) => {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += this.letterValues[word.toUpperCase()[i]];
    }
    if (word.length > 6) {
      score += 8;
    }
    return score;
  };

  // Wave 04
  highestScoreFrom = (words) => {
    const scores = words.map((word) => this.scoreWord(word));
    const maxScore = Math.max(...scores);

    const winner = {
      word: "",
      score: maxScore,
    };
    // Check if there is a tie (more than one word with highest score)
    // If so, add them to maxScoreWords and then apply tieBraker rules
    const maxScoreWords = [];

    words.forEach((word) => {
      if (this.scoreWord(word) === maxScore) {
        maxScoreWords.push(word);
      }
    });
    winner.word = this.tieBreaker(maxScoreWords);

    return winner;
  };

  // helper function wave 04
  tieBreaker = (words) => {
    return words.reduce((word, anotherWord) => {
      if (word.length === 10) {
        return word;
      } else if (anotherWord.length == 10) {
        return anotherWord;
      } else if (word.length > anotherWord.length) {
        return anotherWord;
      }
      return word; // if no tieBreaker rule applies, select first word as the winner
    });
  };
}

// export class
export default Adagrams;
