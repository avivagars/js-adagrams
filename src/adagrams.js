
const LETTER_POOL =  {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
}

const adagramsPoints = {
  'A': 1,
  'E': 1, 
  'I': 1, 
  'O': 1, 
  'U': 1, 
  'L': 1,
  'N': 1,
  'R': 1, 
  'S': 1, 
  'T': 1,
  'D': 2,
  'G': 2,
  'B': 3, 
  'C': 3, 
  'M': 3, 
  'P': 3,
  'F': 4,
  'H': 4, 
  'V': 4, 
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q': 10,
  'Z': 10
  }



export const drawLetters = () => {
  let userLetterList = [];
  let poolOfLetters = LETTER_POOL;

  let adagramsPool = [];

  for (const [key, value] of Object.entries(poolOfLetters)) { 
    for (let i = 0; i < value; i++){
      adagramsPool.push(key)
    }
  
  };
    
  for (let i = 0; i < 10; i++){
    let choice = Math.floor(Math.random() * adagramsPool.length);
    let item = adagramsPool[choice];
    userLetterList.push(item)
    let idx = adagramsPool.indexOf(item);
    adagramsPool.splice(idx, 1);
    console.log(item[i])
    }
  return (userLetterList)
    
};


export const usesAvailableLetters = (input, lettersInHand) => {
  let word = input.split('');
  for(let i in word){
    if(!(lettersInHand.includes(word[i]))){
      return false
    }else{
      lettersInHand.splice(word[i], 1) 
    }
  }
  return true
  
};


export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0
  
    for (let i = 0; i<word.length; i++) {
      score += adagramsPoints[word.toUpperCase()[i]]
    }
    if (word.length >= 7){
      score += 8
    }
    return score
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordPoints = {}
  const winnerDict = {}
  for (const i in words){
    wordPoints[words[i]] = scoreWord(words[i])
    
  }
 
  let points = (Object.values(wordPoints));
  let winner = Math.max(...points);
  for(const [key, value] of Object.entries(wordPoints)) {
    if(winner === value){
      winnerDict["word"] = key
      winnerDict["score"] = value
    }
  }
  return winnerDict
};
