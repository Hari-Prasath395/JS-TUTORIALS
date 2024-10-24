//Functions in Javascript

//Function with a return statement

function add(a, b) {
  return a + b;
}

console.log(add(22, 22));
console.log(add(22, 45));

//function with spread operators

function sum(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

console.log(sum(12, 33, 43, 45));

//Function as Expression

const sub = function (a, b) {
  return a - b;
};

console.log(sub(10, 20));

//Arrow function:

const mul = (a, b) => {
  return a * b;
};

console.log("Multiplication of 2 numbers :", mul(9, 6));

//Arrow function with map()

let numbers = [1, 2, 3, 4, 5];

let doublingNumbers = numbers.map((number) => number * 2);
console.log(doublingNumbers);

//Arrow function with filter()

let words = ["apple", "Mango", "Orange", "Banana", "Grapes"];

let filteredWords = words.filter((word) => word.length > 5);
console.log(filteredWords);

//************************************************************************************** */
//Call Back function -- Function passed as an argument which is then invoked (called back)
//after some operation or event.

function myCallback() {
  console.log("I am a call back function"); // This function prints a message, acting as the callback.
}

function test(fun) {
  fun(); // This function takes another function as a parameter and calls it.
}

test(myCallback); // We pass the `myCallback` function as an argument to `test`, so it will be executed.

setTimeout(function () {
  console.log("Hello world");
}, 3000);

// setInterval(function(){
//     console.log("Hello Javascript");
    
// },1000)
