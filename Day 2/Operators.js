//Type Conversion

//String to Number
/*
a = "124";
console.log(a, typeof a); // Output: "124" "string"
a = Number(a);
console.log(a, typeof a); // Output: 124 "number" (String "124" is converted to a number)

a = false;
console.log(a, typeof a); // Output: false "boolean"
a = Number(a);
console.log(a, typeof a); // Output: 0 "number" (Boolean `false` converts to 0)

a = "James";
console.log(a, typeof a); // Output: "James" "string"
a = Number(a);
console.log(a, typeof a); // Output: NaN "number" (Non-numeric string converts to NaN)

a = 45.32;
console.log(a, typeof a); // Output: 45.32 "number"
a = parseInt(a);
console.log(a, typeof a); // Output: 45 "number" (Float is truncated to an integer)

a = 45.32232;
console.log(a, typeof a); // Output: 45.32232 "number"
a = parseFloat(a);
console.log(a, typeof a); // Output: 45.32232 "number" (Remains a float after parsing)

*/
/*************************************************************************************** */

//Type Coersion:

let x = "25";
let y = 34;

console.log(x + y); //Output : 2534

x = parseInt(x);

console.log(x + y); //Output : 59

/************************************************************************************** */
// Arithmetic Operators

let x1 = 100;
let y1 = 34;
let z;

// Addition
z = x1 + y1; // Output: 134

// Subtraction
z = x1 - y1; // Output: 66

// Multiplication
z = x1 * y1; // Output: 3400

// Division
z = x1 / y1; // Output: 2.9411764705882355

// Modulus
z = x1 % y1; // Output: 32

z = ++x1; // Output: 101

z = --y1; // Output: 33

console.log(z); // Output: 33

//Assignment Operators

let j = 10;

j += 5;
console.log(j); //Output : 15

j -= 5;
console.log(j); //Output : 10

j *= 5;
console.log(j); //Output : 50

j /= 5;
console.log(j); //Output : 10

/*************************************************************************************** */
//Comparison Operators

let a = 10;
let b = "34";

console.log(a == b); // false (loose equality, values are different)
console.log(a === b); // false (strict equality, values and types are different)
console.log(a != b); // true (loose inequality, values are different)

//************************************************************************************* */
// Relational Operators < > <= >=

let k = 45;
let l = 34;

console.log("Greater : ", k > l); //Output : true
console.log("Lesser : ", k < l); //Output : false
console.log("Greater than equal : ", k >= l); //Output : true
console.log("Lesser than equal : ", k <= l); //Output : false

//*********************************************************************************** */
//Logical Operators  && || !

//mark 35-100
let mark = 35;
console.log(mark >= 35 && mark <= 100); //Output : true

let g = 5;
console.log(g == 2 || g == 5); //Output : true

h = false;
console.log(!h); //Output : true

/*************************************************************************************** */

//Ternery Operators

const age = 21;

const result = age >= 18 ? "eligible to vote" : "Not eligible to Vote";
console.log(result);

function welcome(name) {
  const result = name ? name : "No Name";
  console.log("Welcome :" + result);
}

welcome("Kumaran");

user = { fname: "Hari", Age: 25 };

const greeting = (user) => {
  const name = user.fname ? user.fname : "No name";
  return "Hello :" + name;
};

console.log(greeting(user));

//Conditional Chaining

/*avg >= 90 A grade
  avg >= 80 B Grade
  avg >= 70 C grade
*/

const score = 87;
const grade =
  score >= 90
    ? "A Grade"
    : score >= 80
    ? "B Grade"
    : score >= 70
    ? "C Grade"
    : "D Grade";
console.log("Grade :" + grade);
