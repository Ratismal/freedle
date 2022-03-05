const words = require('./words.json');
const gay = require('./gay.json');

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (!gay.includes(word)) {
    console.log('day', i, word);
  }
}
