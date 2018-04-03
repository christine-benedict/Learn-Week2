
// Map vs. For Loop Practice

// Below are exercises to get you seeing the differences between using a map and a for loop. Beneath each prompt write the code to fulfill the exercise requirement.


// Exercise 1
// Consider this variable:
var nums = [1, 2, 3, 4, 5]
// Write a for loop that saves the result of each number multiplied by 5 to another array.
var num5 = []
for(let i = 0; i<nums.length; i++){
    num5.push( nums[i]*5 )
}

// Exercise 2
// Use a map on the nums array that saves the result of each number multiplied by 5 to another array.
var num6 = nums.map((element) => {
  return element*5
})

// Exercise 3
// Consider this variable:
var numbers = [11, 22, 33, 44, 55, 66]
// Write a for loop that saves all numbers in the numbers array that are evenly divisible by 3 into another array.
var evenDivide =[]
for( let i = 0; i< numbers.length; i++){
  if(numbers[i] % 3 == 0){
    evenDivide.push(numbers[i])
  }
}
// Exercise 4
// Use map on the numbers array to save any numbers from the array that are evenly divisible by 3 into another array.
var even3 = numbers.filter((element)=>{
    if(element%3 == 0){
  return element
  }
})

// Exercise 5
// Consider this variable:
var toons = [{name: "Tom", animal: "cat"}, {name: "Jerry", animal: "mouse"}, {name: "Bugs", animal: "rabbit"}, {name: "Daffy", animal: "duck"}, {name: "Felix", animal: "cat"}, {name: "Oswald", animal: "rabbit"}]
var cats=[]
// Write a for loop that saves all cat characters to another array.
for(var i = 0; i< toons.length; i++){
  if ( toons[i].animal == "cat" ){
    cats.push(toons[i])
  }
}
// Exercise 6
// Use map on the toons array to save all rabbit characters to another array.
var rabbits = toons.filter((element) => {
  if ( element.animal == "rabbit"){
      return element
  }
})
// Exercise 7
// Write a for loop to save the names of each character to another array.
var names = []
for(let i = 0; i<toons.length; i++){
  names.push(toons[i].name)
}
// Exercise 8
// Use map on the toons array to save a description of each character to another array.

var descriptions = toons.map((element)=>{
  return element.description = element.name + " is a " + element.animal

}
)

descrip = ["num1", "num2", "num3", "num4", "num5", "num6"]
var descriptions = toons.map((element, index)=>{
  return element.description = descrip[index]

}
)

// Exercise 9
// Consider this variable:
var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
// Write a for loop that creates a new object for every person that has a key value for firstName, lastName, and fullName and saves each new object into another array.
var newPeople = [{
  firstName: "",
  lastName:"",
  fullName:""
}]
for( let i =0; i < people.length; i++ ){
  newPeople[i].fullName = people[i].firstName + " " + people[i].lastName

}

var a = new Array(people.length).fill({firstName: "",lastName: "", fullName:""})
for( let i = 0; i < people.length; i++ ){
  a[i].firstName = people[i].firstName
  a[i].lastName = people[i].lastName
  a[i].fullName = people[i].firstName + " " + people[i].lastName
}

var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
var newArray=[]
for( let i = 0; i < people.length; i++ ){
  newArray[i] = {
    firstName: people[i].firstName,
    lastName: people[i].lastName,
    fullName: people[i].firstName + " " + people[i].lastName
  }
}

newArray

// Exercise 10
// Refactor the above code to use a map on the people array to achieve the same result.
var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
var allNames = people.map((element)=>{
  return {
    firstName: element.firstName,
    lastName: element.lastName,
    fullName: element.firstName + " " + element.lastName
  }
})

// Exercise 11
// Consider this function:
function addTitle(person){
  return "Dr. " + person.firstName + " " + person.lastName
}
// Write a for loop that iterates through each person in the people array and stores the result of addTitle on each element to another array.

var titleArray = []
for(let i = 0; i<people.length; i++){
  titleArray[i]={
    Title: addTitle(people[i])
  }
}

for(let i = 0; i<people.length; i++){
  allNames[i].title = addTitle(people[i])
}
// Exercise 12
// Use map on the run addTitle on each element in the people array and store the result of each call into another array.

//Keep people array independent and create new array with title names
var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
var titleNames = people.map((element) => {
  return {
    title: addTitle(element)
  }
})


// Add title to people array
var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
var titleNames = people.map((element) => {
  return element.title = addTitle(element)
})

var arrayOfTitles =
