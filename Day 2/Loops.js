//While loop

let j = 1;

while (j <= 10) {
  console.log(j);
  j++;
}

//Multiplication table using do while

let table = 2;
let limit = 5;
let i = 1;

do {
  console.log(table + " X " + i + " = " + table * i);
  i++;
} while (i <= limit);

//For Loop

for (let i = 0; i <= 50; i++) {
  console.log(i);
}

let arr = [];

for (let i = 0; i <= 40; i++) {
  arr.push(i);
}

console.log(arr);

//Nested for Loop

for (let i = 1; i <= 5; i++) {
  // Outer loop for rows
  for (let j = 1; j <= 5; j++) {
    // Inner loop for columns
    console.log(i * j); // Printing the product of i and j
  }
}

//creating a 2D array

let rows = 3;
let cols = 4;
let TwoDArray = [];

for (let i = 0; i < rows; i++) {
  let row = [];
  for (let j = 0; j < cols; j++) {
    row.push(i * j);
  }
  TwoDArray.push(row);
}

console.log(TwoDArray);

//For of Loop

let names = ["Ram", "Sam", "kamal", "Guru", "Martin"];

//Using normal For Loop

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("Using For of Loop");

//Using For Of Loop

for (let name of names) {
  console.log(name);
}

// It is used to iterate through the keys (property names) of an object.

const car = { brand: "Toyota", model: "Camry", year: 2020 };

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

//Looping over objects by converting to an array

let user = {
  name: "James Cameroon",
  age: 50,
  city: "Florida",
  contact: "2432132131",
};

let arr_keys = Object.keys(user);
console.table(arr_keys);

let arr_values = Object.values(user);
console.table(arr_values);

for (let i = 0; i < arr_keys.length; i++) {
  // Fixed the loop condition
  console.log(`${arr_keys[i]}: ${arr_values[i]}`);
}

//break

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

//Continue

for (let i = 0; i < 10; i++) {
  
  if (i == 5) {
    continue;
  }
  console.log(i);
}