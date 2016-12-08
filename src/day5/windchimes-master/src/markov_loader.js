'use strict';

// http://www.soliantconsulting.com/blog/2013/02/title-generator-using-markov-chains

function getSentences(str) {
  return str.split(/(\n\n)|\.|\?/g)
    .filter(s => s && s.match(/\w+/))
}

module.exports = function(source) {
  this.cacheable();

  const wordStats = new Map();

  for (const sentence of getSentences(source)) {
    var words = sentence.split(/\s+/)
      .map(w => w.replace(/^\W+/, '').replace(/\W+$/, '').toLowerCase())
      .filter(w => w && w.length);
    for (let i = 0; i < words.length - 2; i++) {
      const key = [words[i], words[i + 1]];
      const nxt = words[i + 2];

      if (wordStats.has(key)) {
        wordStats.get(key).push(nxt);
      } else {
        wordStats.set(key, [nxt]);
      }
    }
  }

  return `module.exports = ${JSON.stringify(Array.from(wordStats.entries()))};`
}
