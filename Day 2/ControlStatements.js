//Control Statements

/* if(condition){
    }
   else{
    }
*/

let age = 18;

if (age >= 18 && age != null) {
  console.log("The person is eligible to vote");
} else {
  console.log("The Person is not eligible to vote");
}

/**
 * if(Condition){
 * -----
 * }
 * else if{
 * -----
 * }
 * else{
 * -----
 * }
 */

let number = 0;

if (number < 0) {
  console.log(number + " " + "Given number is negative");
} else if (number > 0) {
  console.log(number + " " + "Given number is Positive ");
} else {
  console.log(number + " " + "Given number is Zero ");
}

let avg = 89;

if (avg >= 90 && avg <= 100) {
  console.log("Grade A");
} else if (avg >= 80 && avg <= 89) {
  console.log("Grade B");
} else if (avg >= 70 && avg <= 79) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

/**
 * min mark >=35
 * 91-100   A
 * 81-90    B
 * 71-80    C
 * D
 */

let Tam = 78,
  Eng = 89,
  Maths = 89;
let total, avge;
total = Tam + Eng + Maths;

avge = total / 3;
console.log("Total :" + total);
console.log("Average :" + avge.toFixed(2));

if (Eng >= 35 && Tam >= 35 && Maths >= 35) {
  console.log("Result : Pass");
  if (avge > 90 && avge <= 100) {
    console.log("Grade : A Grade");
  } else if (avge > 80 && avge <= 89) {
    console.log("Grade : B Grade");
  } else if (avge > 70 && avge <= 79) {
    console.log("Grade : C Grade");
  } else {
    console.log("Grade : D Grade");
  }
} else {
  console.log("Result : Fail");
  console.log("Grade : No Grade");
}

//Simple Switch case example

let num = 2;

switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Invalid Output");

    break;
}

let letter = 'u';

switch (letter) {
  case 'a':
    console.log(letter + " is an Vowel");
    break;

  case 'e':
    console.log(letter + " is an Vowel");
    break;

  case 'i':
    console.log(letter + " is an Vowel");
    break;

  case 'o':
    console.log(letter + " is an Vowel");
    break;
  case 'u':
    console.log(letter + " is an Vowel");
    break;
  case 'A':
    console.log(letter + " is an Vowel");
    break;
  case 'E':
    console.log(letter + " is an Vowel");
    break;
  case 'I':
    console.log(letter + " is an Vowel");
    break;
  case 'O':
    console.log(letter + " is an Vowel");
    break;
  case 'U':
    console.log(letter + " is an Vowel");
    break;

  default:
    console.log(letter + " is not an vowel");
    break;
    
}
