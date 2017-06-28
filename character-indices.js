indexObject = {};


function countIndices(sentence) {
  var letters = sentence.toLowerCase();
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === " ") {
      continue;
    }
    var index = [];
    for (var j = 0; j < letters.length; j++) {
      if (letters[i] === letters[j]) {
        index.push(j);
      }
      indexObject[letters[i]] = index;
    }
  }
  console.log(indexObject);
}
countIndices("lighthouse in the house");