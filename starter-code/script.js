// console.log(Math.random())
// console.log(Math.floor(Math.random() + 1))

const words = ["apple", "banana", "cherry", "dragonfruit", "elderberry"];

function getRandomWord(wordList) {
  const randomIndex = Math.floor(Math.random() * words.length);
    console.log(words[randomIndex]);

  return words[randomIndex];

}

getRandomWord()