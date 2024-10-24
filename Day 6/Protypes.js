//Prototypes and protypal inheritance in Javascript

let arr = ["Apple", "Banana"];

let obj = {
  name: "James",
  city: "Salem",
  info: function () {
    return `${this.name} from ${this.city}`;
  },
};

/**
 * .__proto__
[at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
arr.__proto__.__proto__
{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
bj.__proto__
{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
obj.__proto__.__proto__
null

 */

let obj1 = {
  name: "James",
  city: "Salem",
  info: function () {
    return `${this.name} from ${this.city}`;
  },
};

/*
let obj2 = {
  name: "Kumar",
};

obj2.__proto__ = obj1;

*/

const obj2 = Object.create(obj1);
obj2.name = "Raja";

Array.prototype.doubleLength = function () {
  return this.length * 2;
};

//The same applies for function also

Function.prototype.MyBind = function () {
  console.log("This is bind function in prototype");
};

function fun() {}

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");

alice.greet();
