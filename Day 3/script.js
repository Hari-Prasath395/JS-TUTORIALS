let first_name = "Sri";
let last_name = "Kumaran";

let c = first_name + " " + last_name;
console.log(c);
// Output: Sri Kumar

// using concat function
c = first_name.concat(" ", last_name);
console.log("Using Concat Method :" + c);
// Output: Using Concat Method :Sri Kumar

// Append
c = "Sri";
c += "Kumaran";
console.log("Using Append Method :" + c);
// Output: Using Append Method :SriKumaran

// Escaping
c = "She can't run";
console.log("Escaping Sequence : " + c);
// Output: Escaping Sequence : She can't run

// To find the length of a string
c = first_name.length;
console.log(c);
// Output: 3

// To convert the string to uppercase
c = first_name.toUpperCase();
console.log("To convert to upper case :" + c);
// Output: To convert to upper case : SRI

// To convert the string to lowercase
c = first_name.toLowerCase();
console.log("To convert to lower case :" + c);
// Output: To convert to lower case : sri

// To find the index of a character in a string
c = last_name.indexOf("a");
console.log("To find the index of a char in a string " + c);
// Output: To find the index of a char in a string 4

// To find the last index of a character in a string
c = last_name.lastIndexOf("a");
console.log("To find the last index of a char in a string :" + c);
// Output: To find the last index of a char in a string : 6

// To find the character in a string
c = last_name.charAt(6);
console.log("To find the char of a string :" + c);
// Output: To find the char of a string : n

// To get the ASCII value in a string
c = last_name.charCodeAt(6);
console.log("To find the char code of a string :" + c);
// Output: To find the char code of a string : 110

//Substring

let text = "01234rose5678";

// To print the first set of numeric characters
d = text.substring(0, 5);
console.log("To print the first set of numeric : " + d);
// Output: To print the first set of numeric : 01234

// To print the alphabetic characters
d = text.substring(5, 9);
console.log("To print the alpha characters :" + d);
// Output: To print the alpha characters : rose

// If the start index is high and end index is low
d = text.substring(5, 0);
console.log("To print the alpha characters :" + d);
// Output: To print the alpha characters : 01234

//========================================================================================//

//Replace in JS


let f = 'I am from Salem';
console.log(f);
g = f.replace('Salem','Chennai');

console.log(g);


//Includes in JS

let Pets = ['Cat','dog','camel'];

s = Pets.includes('Cat');
s = Pets.includes('ball');
console.log(s);


//Trim in JS

let fname = 'Joes ';
j = fname.length;
console.log(j);

fname = fname.trim();
console.log(fname);

j = fname.length;
console.log(j);

//Pad Start And Pad End

a = "5";
a = a.padStart(5,0);
console.log(a);

b = "6";
b = b.padEnd(5,2);
console.log(b);





