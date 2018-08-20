console.log("////////////////////////////// QUESTION 2.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "addToEndOfArr".
Given an array and an element of any type, create a function that returns an array with all the contents of the given array, but with the given element added in at the last index of the returned array.
*/

function addToEndOfArr(arr, element) {
  // your code here

  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
  }
  newArr.push(element)
  return newArr

}

var inputOne = [1, 2];
var outputOne = addToEndOfArr(inputOne, 3);
console.log(inputOne); // --> [1, 2]
console.log(outputOne); // --> [1, 2, 3]

console.log("////////////////////////////// QUESTION 2.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "totalBill".

in totalBill calculates sales tax(sales tax = 9.5%) and tip(tip= 15%) and add that to the total bill
return the total amount due after tax and tip.

Notes:Assume that sales tax is 9.5% and tip is 15%.
*/

function totalBill(preTaxAndTipAmount) {
  // your code here

  function tax(arg) {
    var tax = (arg * .095)
    return tax
  }

  function tip(arg) {
    var tip = arg * .15
    return tip
   }

  return preTaxAndTipAmount + tax(preTaxAndTipAmount) + tip(preTaxAndTipAmount)

}
var outputTwo = totalBill(20);
console.log(outputTwo); // --> 24.9

console.log("////////////////////////////// QUESTION 2.3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "areaOfACircle".

Given the radius of a circle, "areaOfACircle" should returns its area.

Reference:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
*/

function areaOfACircle(radius) {
  // your code here

  return Math.PI * Math.pow(radius, 2)

}
var outputThree = areaOfACircle(4);
console.log(outputThree); // --> 50.26548245743669

console.log("////////////////////////////// QUESTION 2.4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "findLongestWord".

  Given 3 words, "findLongestWord" returns the length of the longest word.
*/

function findLongestWord(word1, word2, word3) {
  // your code here
  // Step 1 // concat all three strings into one large string with space inbetween

  var str = word1 + " " + word2 + " " + word3

  // Step 2 create an array of these three words by spliting them at the space

  var res = str.split(" ")

  // Step 2.5 // create a variable called largest equal to the first index of the array

  var largest = res[0]

  // Step 3 // loop through to compare and find smallest length and then return the largest length

    // Still dont know how to do bubble sort
  
}

var outputFour = findLongestWord('a', 'be', 'see');
console.log(outputFour); // --> 3