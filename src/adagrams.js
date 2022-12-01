
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



export const drawLetters = () => {
  let userLetterList = [];
  let poolOfLetters = LETTER_POOL;

  let adagramsPool = [];

  for (const [key, value] of Object.entries(poolOfLetters)) { 
    for (let i = 0; i < value; i++){
      adagramsPool.push(key)
    }
  
  };
  // console.log(`this is the adagrams pool ${adagramsPool}`);
    
  for (let i = 0; i < 10; i++){
    let choice = Math.floor(Math.random() * adagramsPool.length);
    let item = adagramsPool[choice];
    userLetterList.push(item)
    let index = adagramsPool.indexOf(item);
    if (index > -1) {
      adagramsPool.splice(index, 1)
    }
    // console.log(index)
    

    // console.log(item);
  
     
  }
  return (userLetterList)
  // console.log(adagramsPool)
    
   
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
