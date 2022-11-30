
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

  // Implement this method for wave 1
// def draw_letters():
// user_letter_list = []
// #changed from a constant 
// pool_of_letters = LETTER_POOL.copy()
// adagrams_pool = []
// for key,value in pool_of_letters.items():
//   for i in range(value):
//       adagrams_pool.append(key)


// for num in range(10):
//   choice = random.choice(adagrams_pool)
//   user_letter_list.append(choice)
//   adagrams_pool.remove(choice)


// return user_letter_list
  let userLetterList = [];
  let poolOfLetters = Array.from(LETTER_POOL);
  let adagramsPool = [];
  for (const [key, value] of Object.entries(poolOfLetters)) {
    for (let i = 0; i < value; i++){
      adagramsPool.push(value)
  for (let i = 0; i < 11; i++){
    choice = Math.random(adagramsPool);
    userLetterList.push(choice);
    adagramsPool.pop(choice);
  return userLetterList;  

  };  

    };
};



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
