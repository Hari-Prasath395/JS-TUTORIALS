//Hoisting in Javascript

//Function Declaration

addNunbersDeclaration(); // Works fine, due to function declaration hoisting
function addNunbersDeclaration() {
  console.log("Adding numbers from function declaration");
}

// Function Expression
//addNumberExpression(); // Error: Cannot access 'addNumberExpression' before initialization

let addNumberExpression = function () {
  console.log("Adding numbers from function Expression");
};

addNumberExpression(); // Works fine, because the function is now initialized

/**
 * 
Function Declarations (like addNunbersDeclaration) are hoisted entirely. 
This means you can call the function before its declaration, and it will still work 
because the entire function is moved to the top of the scope during the compilation phase.

Function Expressions (like addNumberExpression) are treated differently. The variable 
(addNumberExpression) is hoisted, but the function assignment is not. This means that 
trying to call addNumberExpression() before the function is initialized results in a 
ReferenceError. After the initialization, it works fine.
 *
 */

//Function Hoisting

//Entire function declarations are hoisted to the top of their scope. This allows you 
//to call a function before its declaration in the code.

sayHello();
function sayHello() {
  console.log("Hello world");
}


//2 Variable Hoisting

//For variables declared with var, the declaration is hoisted, but the initialization is 
//not. This means the variable is declared at the top, but it is undefined until the 
//actual line of initialization.

console.log(x); // undefined
var x = 5;
console.log(x); // 5

//var x is hoisted, but the assignment x = 5 remains where it is. As a result, 
//x is undefined when it's logged before the initialization.


//3.let and const hoisting

/**
 * Variables declared with let and const are also hoisted, but they are not initialized 
 * until their declaration line is executed. This is known as the "temporal dead zone," 
 * which means accessing these variables before the declaration will result in a 
 * ReferenceError.
 */

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;



