// Exploring foreach in JS

const fruits = ["apple", "mango", "orange", "cherry"];
console.log(fruits); // Output the entire fruits array

// Iterating through the fruits array
fruits.forEach((fruit) => {
  console.log(fruit); // Output each fruit one by one
});

// To sum all the elements in an array
let numArr = [1, 2, 3, 4, 5, 6];
let sum = 0;
numArr.forEach((number) => {
  sum += number; // Add each number to the sum
});

console.log(sum); // Output the sum: 21

// Create a new array from the existing array with doubled values
let doublingNumbers = [];
numArr.forEach((number) => {
  doublingNumbers.push(number * 2); // Push each doubled number to the new array
});

console.log(doublingNumbers); // Output the doubled array: [2, 4, 6, 8, 10, 12]
