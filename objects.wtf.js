// var myObject = {
//   a: 6,
//   b: "abc",
//   c: true,
//   d: null,
// };

// var valueB = myObject['b'];


// var x = 'water-rock';

// var y = x.split("-");

// console.log(y);
var args = process.argv;
function countLetters(stringParameter) {
 var objectReturned = {};
   console.log(stringParameter)

 for(letter of stringParameter) {

   if (!objectReturned.letter) {
     if (!objectReturned[letter]){
       objectReturned[letter] = 1;
     } else {
       objectReturned[letter] += 1;
     }
   }
 }
 console.log(objectReturned);
}

countLetters(args);