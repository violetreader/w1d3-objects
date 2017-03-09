//create a function that passes an object as its argument AND
//spits out an object as it's answer counting all characters

//can i create a function that counts all possible characters in javascript?
//loop that function through each individual character

var args = process.argv;


function countLetters (inputString) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  inputString = inputString.toLowerCase();

  console.log("inputString is", inputString);
  var result = {};
  for (var i = 0; i < inputString.length; i++) {
    var character = inputString[i];
    // console.log("each character looped:", character);
    if (alphabet.includes(character)) {
      if (!result.hasOwnProperty(character)) {
        result[character] = 1;
      } else {
        result[character] += 1;
      }
    }
  }
  console.log(result);
}

countLetters(process.argv[2]);

