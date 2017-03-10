var args = process.argv;



function countLetters (inputString) {

  inputString = inputString.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var output = {};
  for (var i in inputString) {
    var character = inputString[i];
    // console.log(character);
    if (alphabet.includes(character)) {
      if (output[character] == null) {
        var array = [];
        // console.log(array);
        array.push(i);
        // console.log(array);
        output[character] = array;
        // console.log(output[character]);
      } else {
        // console.log(i);
        output[character].push(i);
      }
        // console.log(output);
      //   output[character] = [];
      // } else {
      //   output[character] += 1;
      // }
    }
  }
  console.log(output);


}

countLetters(process.argv[2]);