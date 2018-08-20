console.log("////////////////////////////// QUESTION 4.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "evenWordLengthOnly".

Given an array of strings, "evenWordLengthOnly" returns an array containing only the elements of the given array whose length is an even number.

*/
function evenWordLengthOnly(words) {
  // your code here

  var evenArray = []

  function isEven(arg) {
    if (arg % 2 == 0)
      return true;
    else
      return false;
  }

  for (var i = 0; i < words.length; i++) {
    var isItEven = isEven(words[i].length)
    if (isItEven == true) {
      evenArray.push(words[i])
    }
  }

  return evenArray

  // code ends here
}
var output = evenWordLengthOnly(['word', 'words', 'food', 'foods']);
console.log(output); // --> ['word', 'food']

console.log("////////////////////////////// QUESTION 4.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "countWords".

  Given a string, "countWords" returns an object where each key is a word in that string and the value of the key is how many times that word appears in the string. 

Notes:
* If given an empty string, it should return an empty object.
*/
function countWords(str) {
  // your code here

  var newObj = {}
  var newArr = str.split(" ")
  console.log(newArr)

  for (var i = 0; i < newArr.length; i++) {
    var newKey = newArr[i]
    
  }

    // code ends here
}

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}