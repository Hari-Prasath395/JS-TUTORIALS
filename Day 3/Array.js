//Arrays in Javascript

let a = [10, 20, 30, 40, 50];

console.table(a);
console.log(a);

let b = new Array(60, 70, 80, 90, 100);

console.table(b);

let c = new Array(30, 50, true, { m1: 57, m2: 78, m3: 98 });
console.table(c);

//ForEach

const number = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//value,index,array
number.forEach((val, index) => {
  console.log("Index" + index + " " + val);
});

const users = [
  { full_name: "Ram Kumar", Age: 12, city: "Salem", Salary: 35000 },
  { full_name: "Rajesh", Age: 19, city: "Kovai", Salary: 75000 },
  { full_name: "Roopa", Age: 18, city: "DPI", Salary: 25000 },
  { full_name: "Kamala", Age: 20, city: "Karur", Salary: 18000 },
];

console.table(users);

users.forEach((user) => {
  console.log(user.full_name);
});

//Exploring the foreach method in Javascript
const fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits); // Output: [ 'Apple', 'Mango', 'Banana', 'Orange' ]

fruits.forEach((fruit) => {
  console.log(fruit);
});

// Output from forEach loop:
// Apple
// Mango
// Banana
// Orange

//Use foreach method to sum all the elements in an array

const arr = [20, 40, 60, 80, 90];
let total = 0;

arr.forEach((val) => {
  total += val; // Directly adding the value to total
});

console.log(total); // Output: 290

//Create a new array from the existing array

const nos = [1, 2, 3, 4, 5];

let newDoubledArray = [];
nos.forEach((val) => {
  newDoubledArray.push(val * 2); // Doubling each value and pushing it into the new array
});

console.log(newDoubledArray); // Output: [2, 4, 6, 8, 10]

//Using foreach find the max element in a array

let numArr = [20, 45, 77, 33, 99];
let maxNumber = numArr[0]; // Initialize with the first element

numArr.forEach((val) => {
  if (val > maxNumber) {
    // Compare current value with the current maxNumber
    maxNumber = val; // Update maxNumber if the current value is larger
  }
});

console.log(maxNumber); // Output: 99

//Map Concept

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sqrt = numbers.map((number) => {
  return Math.sqrt(number).toFixed(2);
});

console.table(sqrt);

let usersHistory = [
  { name: "Jagan", age: 15, city: "Chennai", salary: 10300 },
  { name: "Prem", age: 25, city: "Madurai", salary: 180000 },
  { name: "Karna", age: 18, city: "Karur", salary: 103070 },
  { name: "Lara", age: 35, city: "Dpi", salary: 190300 },
  { name: "Kumarai", age: 21, city: "Kovai", salary: 20300 },
  { name: "Luna", age: 15, city: "Krishnagiri", salary: 18300 },
];

console.table(usersHistory);

let eligible_Status = usersHistory.map((userH) => ({
  ...userH,
  Status: userH.age >= 18 ? "Eligible" : "Not Eligible",
}));

console.table(eligible_Status);
/*
┌─────────┬────────────┬─────┬──────────────┬────────┐
│ (index) │    name    │ age │    city      │ salary │
├─────────┼────────────┼─────┼──────────────┼────────┤
│    0    │   Jagan    │ 15  │   Chennai    │ 10300  │
│    1    │   Prem     │ 25  │   Madurai    │ 180000 │
│    2    │   Karna    │ 18  │    Karur     │ 103070 │
│    3    │   Lara     │ 35  │     Dpi      │ 190300 │
│    4    │  Kumarai   │ 21  │    Kovai     │ 20300  │
│    5    │   Luna     │ 15  │ Krishnagiri  │ 18300  │
└─────────┴────────────┴─────┴──────────────┴────────┘

┌─────────┬────────────┬─────┬──────────────┬────────┬───────────────┐
│ (index) │    name    │ age │    city      │ salary │    Status     │
├─────────┼────────────┼─────┼──────────────┼────────┼───────────────┤
│    0    │   Jagan    │ 15  │   Chennai    │ 10300  │ Not Eligible  │
│    1    │   Prem     │ 25  │   Madurai    │ 180000 │   Eligible    │
│    2    │   Karna    │ 18  │    Karur     │ 103070 │   Eligible    │
│    3    │   Lara     │ 35  │     Dpi      │ 190300 │   Eligible    │
│    4    │  Kumarai   │ 21  │    Kovai     │ 20300  │   Eligible    │
│    5    │   Luna     │ 15  │ Krishnagiri  │ 18300  │ Not Eligible  │
└─────────┴────────────┴─────┴──────────────┴────────┴───────────────┘
*/

//Slice

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Slice(start, end)
console.log(nums); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(nums.slice(2)); // Output: [3, 4, 5, 6, 7, 8, 9, 10] (from index 2 onwards)
console.log(nums.slice(2, 5)); // Output: [3, 4, 5] (from index 2 to 4)

/**
 * slice(start, end) extracts a portion of the array, starting at start (inclusive) 
 * and ending at end (exclusive).
If the end is omitted, it slices till the end of the array.
 */

//Splice Method in Javascript

/**
 * splice() removes or replaces elements in the original array,
 * and it can also insert new elements at the specified index.
 *
 * splice(start,length,new elements)
 */
const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/**
 * Splice is used to remove elements from an array.
 * It will change the original array
 *
 * splice(start, length, new elements)
 */
console.log("Before splice n1 " + n1);

let removedElements = n1.splice(2);
console.log("Removed elements  " + removedElements); // Elements from index 2 onward are removed
console.log("After splice " + n1); // Remaining elements after splice: [1, 2]

const n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removedElement = n2.splice(2, 2);
console.log("Removed elements  " + removedElement); // Two elements starting from index 2 are removed
console.log("After splice " + n2); // Remaining elements: [1, 2, 5, 6, 7, 8, 9, 10]

const n3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removedElemen = n3.splice(2, 2, 45, 67);
console.log("Removed elements  " + removedElemen); // Two elements starting from index 2 are replaced by 45, 67
console.log("After splice " + n3); // Modified array: [1, 2, 45, 67, 5, 6, 7, 8, 9, 10]

//concat in js

let x = [10, 20, 30];
let y = [40, 50, 60];
let z = [70, 80, 90, 100];

console.log(x.concat(y, z)); // Concatenates arrays x, y, and z

console.log(x.concat(y, z, 85, 97, 19)); // Concatenates arrays x, y, z, and additional numbers

console.log(x.concat(y, z, ["a", "b", "c"])); // Concatenates arrays x, y, z, and a new array ["a", "b", "c"]

/**
 * [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]  // Concatenated arrays x, y, z
[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 85, 97, 19]  // Concatenated x, y, z, and numbers 85, 97, 19
[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "a", "b", "c"]  // Concatenated x, y, z, and array ["a", "b", "c"]

 */

//Sort in JS

let names = ["Zara", "Anil", "Kumaran", "Paul", "Joes"];
console.log("Before sort :" + names);
names.sort();
console.log("After sort :" + names);

let num = [10, 90, 125, 18, 46, 88, 11, 130];
let ASC = num.sort((a, b) => {
  return a - b;
});

console.log(ASC);

let DSC = num.sort((a, b) => {
  return b - a;
});

console.log(DSC);

//Sort based on age

let usersWork = [
  { name: "Jagan", age: 15, city: "Chennai", salary: 10300 },
  { name: "Prem", age: 25, city: "Madurai", salary: 180000 },
  { name: "Karna", age: 18, city: "Karur", salary: 103070 },
  { name: "Lara", age: 35, city: "Dpi", salary: 190300 },
  { name: "Kumarai", age: 21, city: "Kovai", salary: 20300 },
  { name: "Luna", age: 15, city: "Krishnagiri", salary: 18300 },
];

let sortedUsersWork = usersWork.sort((a, b) => {
  return a.age - b.age;
});

console.table(usersWork);

//Fill in Js
let n = [1, 2, 3, 4, 5];

// Fill(value, start, end)
console.log(n.fill(0)); // Fills the entire array with 0
console.log(n.fill(7, 2)); // Fills from index 2 to the end with 7
console.log(n.fill(99, 1, 4)); // Fills from index 1 to 3 (exclusive of index 4) with 99

//[0, 0, 0, 0, 0]         // Entire array is filled with 0
//[0, 0, 7, 7, 7]         // Array filled with 7 from index 2 onwards
//[0, 99, 99, 99, 7]      // Array filled with 99 from index 1 to 3 (index 4 is not included)

// Includes in Js

//Includes(value,start_index)

const products = ["Pen", "Pencil", "Eraser", "Box"];

console.log(products.includes("Pen")); //true
console.log(products.includes("Scale")); //false
console.log(products.includes("Pen", 1)); //false

//Join

const product = ["Pen", "Pencil", "Eraser", "Box"];

console.log(product.join());
console.log(product.join(" "));
console.log(product.join("|"));

/*
Pen,Pencil,Eraser,Box
Pen Pencil Eraser Box
Pen|Pencil|Eraser|Box
*/

//Reverse in Js

const m = [1, 2, 3, 4, 5];
console.log("Before reverse : " + m);
m.reverse();
console.log("After reverse : " + m);
