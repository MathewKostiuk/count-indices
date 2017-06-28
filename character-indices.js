indexObject = {};


function countIndices(sentence) {
  var letters = sentence.toLowerCase();
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === " ") {
      continue;
    }
    var index = [];
    for (var x = 0; x < letters.length; x++) {
      if (letters[i] === letters[x]) {
        index.push(x);
      }
      indexObject[letters[i]] = index;
    }
  }
  console.log(indexObject);
}
countIndices("lighthouse in the house");