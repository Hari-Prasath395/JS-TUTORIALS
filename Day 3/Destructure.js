//Array destructuring before ES6

// const numbers = [1, 2, 3, 4, 5, 6];
// const first = numbers[0];
// const second = numbers[1];
// const rest = numbers.slice(2);
// console.log(first);
// console.log(second);
// console.log(rest);

//After ES 6

const number = [1, 2, 3, 4, 5, 6];
const [first, second, ...rest] = number;
console.log(first, second, +" " + rest);

//Object destructuring
/*
const person = {
  name: "Harris",
  age: 45,
  job: "Music Director",
};

const { name, age, job } = person;
console.log(name); // Output: Harris
console.log(job); // Output: Music Director
console.log(age); // Output: 45

*/
//Using default values with array destructuring
/*
const numbers = [1, 3];
const [x, y, z = 67] = numbers;
console.log(x);
console.log(y);
console.log(z);

const student = {
  name: "Guru",
  age: 25,
};

const { name, age, gender = "Male" } = student;
console.log(name); // Output: Guru
console.log(age); // Output: 25
console.log(gender); // Output: Male

*/
/**
 * The code uses object destructuring to extract properties from the student object,
 * and it assigns a default value of "Male" to the gender variable since it does not
 * exist in the object.
 *  */

//Swapping

let a = 10;
let b = 20;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

let myArray = [1, 2, 3, 4, 5];
let [First, , , fourth] = myArray;
console.log(First);
console.log(fourth);

//Nested object

let member = {
  name: "Jamuna",
  age: 23,
  address: {
    city: "Salem",
    state: "Tamil Nadu",
    contact: "324323132",
  },
};

let {
  name,
  age,
  address: { city, state },
} = member;
console.log(name);
console.log(age);
console.log(city);
console.log(state);
