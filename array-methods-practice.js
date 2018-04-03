// Array Methods Practice

// Below are exercises in using array methods. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Consider this variable:
var groceryList1 = ["apples", "carrots", "oatmeal"]
// Write the code that will add "granola" to the end of array without altering the original array.
var list1 = []
for ( let i = 0; i < groceryList1.length; i++){
  list1.push(groceryList1[i])
}
list1[3] = "granola"

// Exercise 2
// Consider this variable:
var groceryList2 = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList2.push("soda")
// Exercise 3
// Consider this variable:
var numbers1 = [1, 2, 3, 4, 5]
// Write the code that will add the number 0 to the beginning of the array without altering the original array.
var numList1 = []
for ( let i = 0; i < numbers1.length; i++ ){
  numList1.push(numbers1[i])
}
numList1.unshift(0)

// Exercise 4
// Consider this variable:
var numbers2 = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the original array.
numbers2.unshift(0)

// Exercise 5
// Consider this variable:
var numbers3 = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
numbers3.indexOf(2)

// Exercise 6
// Write the code that finds the index of the last appearance of the number 2.
//this doesn't work

var numbers3 = [2, 13, 6, 8, 4, 2]

for( var i = 0; i <numbers3.length; i++){
  var indices = []
  if ( numbers3[i] == 2 ){
    indices.push(i)
    console.log(indices)
  }
}
var lastIndex = indices.pop()

// Exercise 7
// Consider this variable:
var chars = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the chars array together into a string.
var string = chars.join("")
// Exercise 8
// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.
var charsReversed = chars.reverse()
// Exercise 9
// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
var allTogether = charsReversed.join("-")
// Exercise 10
// Write the code that brings all the letters in the charsReversed Array together into a string without separators.
var allTogether2 = charsReversed.join("")
