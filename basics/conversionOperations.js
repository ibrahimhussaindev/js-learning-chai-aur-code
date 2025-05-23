// *********************** Conversion ***********************

// let score = 45;
let score = "45";

// console.log(typeof score);
// console.log(typeof(score));

// Convert string to number
let valueInNumber = Number(score); // Converts to number explicitly
let valueInNumber2 = +score; // Converts to number using unary plus operator

/*
console.log(typeof valueInNumber);
console.log(typeof valueInNumber2);
console.log(valueInNumber);
console.log(valueInNumber2);
*/

let anyNumber = 23;

// console.log(typeof anyNumber);

// Convert number to string
let stringNumber = String(anyNumber); // Converts to string explicitly
let stringNumber2 = anyNumber.toString(); // Converts to string using method

/*
console.log(typeof stringNumber);
console.log(typeof stringNumber2);
console.log(stringNumber);
console.log(stringNumber2);
*/


// Examples of conversion to number:
/*
let example = "45abc";
let exampleInNumber = +example;
console.log(typeof exampleInNumber); // number
console.log(exampleInNumber); // NaN
*/
/*
let example = "Ibrahim";
let exampleInNumber = +example;
console.log(typeof exampleInNumber); // number
console.log(exampleInNumber); // NaN
*/
/*
let example = null;
let exampleInNumber = +example;
console.log(typeof exampleInNumber); // number
console.log(exampleInNumber); // 0
*/
/*
let example = undefined;
let exampleInNumber = +example;
console.log(typeof exampleInNumber); // number
console.log(exampleInNumber); // NaN
*/
/*
let example = true;
let exampleInNumber = +example;
console.log(typeof exampleInNumber); // number
console.log(exampleInNumber); // 1
*/
/*
let example = false;
let exampleInNumber = +example;
console.log(typeof exampleInNumber); // number
console.log(exampleInNumber); // 0
*/


// Examples of conversion to boolean:
/*
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // false
*/
/*
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // false

let isLoggedIn = "Ibrahim"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true
*/
/*
let isLoggedIn = null
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // false

let isLoggedIn = undefined
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // false
*/


// Examples of conversion to string:
/*
let example = 123
let exampleInString = String(example)
console.log(typeof exampleInString); // string
console.log(exampleInString); // "123"
*/
/*
let example = null
let exampleInString = String(example)
console.log(typeof exampleInString); // string
console.log(exampleInString); // "null"
*/
/*
let example = undefined
let exampleInString = String(example)
console.log(typeof exampleInString); // string
console.log(exampleInString); // "undefined"
*/
/*
let example = true
let exampleInString = String(example)
console.log(typeof exampleInString); // string
console.log(exampleInString); // "true"
*/
/*
let example = false
let exampleInString = String(example)
console.log(typeof exampleInString); // string
console.log(exampleInString); // "false"
*/


// *********************** Operations ***********************

let value = 3
let negValue = -value // Negates the value (unary minus)
// console.log(negValue);

// Arithmetic operations
// console.log(2+2); // Addition
// console.log(2-2); // Subtraction
// console.log(2*2); // Multiplication
// console.log(2**3); // Exponentiation (2^3)
// console.log(2/3); // Division
// console.log(2%3); // Modulus (remainder)

let str1 = "Ibrahim"
let str2 = " Hussain"
let str3 = str1 + str2 // Concatenation of strings
// console.log(str3);

// Type coercion (Implicit Conversion) with + operator
// console.log("1" + 2); // "12" (string)
// console.log(1 + "2"); // "12" (string)
// console.log("1" + 2 + 2); // "122" (left-to-right evaluation)
// console.log(1 + 2 + "2"); // "32"  (1+2=3 then "3"+"2"="32")

// console.log(+true); // 1
// console.log(+""); // 0

// Multiple assignment (bad practice due to low readability)
// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++; // Post-increment
// ++gameCounter // Pre-increment
// console.log(gameCounter);