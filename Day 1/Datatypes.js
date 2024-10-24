// Datatypes in Javascript

/*
Primitive and Non-Primitive

Primitive - Number,String,Boolean,Undefined,Null,Symbol,BigInt
Non-Primitive - Object,Array,Function
*/

var a = 233;
console.log(typeof a); // "number"

var FirstName = "James"; // "string"
console.log(typeof FirstName);

var isMarried = true; // "boolean"
console.log(typeof isMarried);

var phone = null; // "object" (in JavaScript, `null` is considered an object)
console.log(typeof phone);

let b; // "undefined"
console.log(typeof b);

let s = Symbol();
console.log(s);

let s1 = Symbol();
console.log(s1);

console.log(s == s1);

//each Symbol() is unique, so s == s1 will return false even if they appear similar.

/***************************************************************************************** */

//Non-Primitive types

let courses = ["C", "C++", "Java", "Javascript"];
console.log(typeof courses); //Output : Object

let student = {
    'fname':"Tarun",
    'Age':23
};

console.log(typeof student); //Output : Object

var d = new Date();
console.log(typeof d); //Output : Object

console.log(d);



