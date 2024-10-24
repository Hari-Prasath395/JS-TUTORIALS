//Creating objects in Javascript

/* 1.Using Object literals
   2.Using Object Constructor
   3.Using Object.create() method
   4.Using Class
*/

// 1.Using Object literals

const Person = {
  name: "Lara",
  age: 25,
  job: "Developer",
};

console.log(Person);

// 2.Using Object Constructor

const Member = new Object();
Member.name = "Klasen";
Member.age = 34;
Member.job = "Network Engineer";

console.log(Member);

// 3.Using Object.create() method

const Studentproto = {
  sayHello: function () {
    return `Hello,My name is ${this.name}`;
  },
};

const Student = Object.create(Studentproto);
Student.name = "Yansen";
Student.age = 18;
Student.course = "C++";

console.log(Student);
Student.sayHello();

// 4.Using Class

class Artist {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const artist = new Artist("Jhon", 21, "Art Designer");

console.log(artist);

//************************************************************************************** */

// Dot Notation , Bracket Notation

const user = {
  name: "Kenny",
  age: 22,
  Job: "Writter",
};

console.log(user.name);
console.log(user["age"]);

//Limitations: You can't use dot notation for property names that are dynamic,
//contain spaces, or are numbers.

const obj = {
  "first name": "John",
  123: "value",
};

// console.log(obj.first name); // This will throw an error
// console.log(obj.123); // This will also throw an error

//Allows special characters: It allows property names with spaces, special characters,
// or numbers.

const person = {
  name: "Alice",
  age: 25,
  "first name": "John",
  123: "value",
};

console.log(person["name"]); // Output: 'Alice'
console.log(person["first name"]); // Output: 'John'
console.log(person[123]); // Output: 'value'
/*
Dynamic property access: This is especially useful when the property 
name is stored in a variable.
*/

const prop = "age";
console.log(person[prop]); // Output: 25

//Iterarting through Javascript objects

let stu = {
  name: "Jiva",
  age: 34,
  Job: "Actor",
};

for (let key in stu) {
  console.log(`${key} : ${stu[key]}`);
}

//Using Object.keys()

let keys = Object.keys(stu);
console.log(keys);

keys.forEach((key) => {
  console.log(`${key} : ${stu[key]}`);
});

//Using Object.values()

let values = Object.values(stu);
console.log(values);

values.forEach((value) => {
  console.log(`${value}`);
});

//Using Object.entries

let entries = Object.entries(stu);
console.log(entries);

entries.forEach((entry) => {
  console.log(`${entry[0]} : ${entry[1]}`);
});
