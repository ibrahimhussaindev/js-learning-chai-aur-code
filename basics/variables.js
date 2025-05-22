const firstName = "Ibrahim";
let lastName = "Hussain";
var age = 19;
let email;
address = "Karachi Pakistan";
// The above line is equivalent to var address = "Karachi Pakistan"; in the global scope

// prefer not to use var because of issue in block scope and function scope

// The difference between var, let and const is:
// 1. var is function scoped, let and const are block scoped.
// 2. var can be redeclared and reassigned, let can be reassigned but not redeclared, and const cannot be redeclared or reassigned.
// 3. var is hoisted to the top of the function or global scope, let and const are hoisted to the top of the block scope but not initialized.
// 4. const must be initialized at the time of declaration, let and var can be declared without initialization.
// 5. const is used to declare constants, let is used to declare variables that can be reassigned, and var is used to declare variables that can be redeclared and reassigned.


// firstName = "Ali"; 
// // This will throw an error because firstName is a constant and cannot be reassigned
// lastName = "Ali"; 
// // This will work because lastName is declared with let and can be reassigned
// age = 20; 
// // This will work because age is declared with var and can be reassigned
// address = "Islamabad Pakistan"; 
// // This will work because address is declared without var, let, or const and can be reassigned

console.log(firstName);
console.table([firstName, lastName, age, address, email]);