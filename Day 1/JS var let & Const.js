/*Generally a variable is like a container that holds a value used to store data such as 
Numbers , text , objects etc
*/
//************************************************************************************/

var a = 25;
var b = 35;
console.log(a + b); // Output: 60

//1. Scope

if (true) {
  var msg = "Welcome to Javascript";
}

console.log(msg); // Output: "Welcome to Javascript"
/*
1. var msg = "Welcome to Javascript"; is declared inside the if block.
2. Unlike let or const, which are block-scoped (only accessible inside the {} block 
   where they are defined)
3. It is accessible outside the if block because var is of Global scope.

*/

//If let or const used instead

if (true) {
  let msg = "Welcome to Javascript";
}

console.log(msg); // Uncaught ReferenceError: msg is not defined

//************************************************************************************ */

// Variable Declaration

var a = 25;
console.log(a); // Output: 25

var a = 45;
console.log(a); // // Output: 45

/*
var allows variable redeclaration within the same scope, so the second declaration 
of a overwrites the first value.
*/

let b = 35;
console.log(b);

let b = 67;
console.log(b);

/*
let does not allow redeclaring a variable in the same scope, so trying to 
redeclare b will cause an "Identifier 'b' has already been declared

const declares a constant that cannot be reassigned or redeclared, so attempting 
to do so will result in an error.

*/

//************************************************************************************** */
// 3. Value Assignement

var c = 25;
console.log(c);
c = 45;
console.log(c);
// Var allows reassignment and redeclaration.

let d = 95;
console.log(d);
d = 67;
console.log(d);
// Let allows reassignment but does not allow redeclaration in the same scope.

const x = 56;
console.log(x);
x = 34;
console.log(x); // Output : Assignment to a constant variable error.

// Const does not allow reassignment or redeclaration.


const student = {'name':"Guru","Age":13};
console.table(student);

student.name = "Raja";
console.table(student);

/*while const prevents reassignment of the entire object, it allows modifying 
the properties of the object, so student.name can be updated.
*/



