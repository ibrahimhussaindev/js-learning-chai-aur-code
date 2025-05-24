// *********************** Primitive Data Types ***********************

// JavaScript has 7 primitive data types:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Sumbol
// 7. BigInt

// ✅ JavaScript is a dynamically typed language
// This means the type is automatically determined at runtime, not explicitly declared

const score = 100        // Number
const scoreValue = 100.3 // Number (floating-point)
const isLoggedIn = false // Boolean
const outsideTemp = null // Null
let userEmail;           // Undefined

const id = Symbol('123')        // Unique Symbol
const anotherId = Symbol('123') // Even with same description, symbols are always unique
// console.log(id === anotherId); // false

const bigNumber = 423567849639784234896n // BigInt for very large integers

// console.log(typeof outsideTemp); // "object" — this is a long-standing bug in JavaScript; null is actually a primitive type
// console.log(typeof id);          // "symbol"
// console.log(typeof bigNumber);   // "bigint"


// *********************** Reference (Non-Primitive) Data Types ***********************

// JavaScript non-primitive data types include:
// 1. Array
// 2. Object
// 3. Function

const heros = ["spiderMan", "SuperMan"]  // Array → object type
const obj = {
    name: "Ibrahim",
    age: 19
}                                        // Object
const func = function(){
    console.log("Hello World!");
}                                        // Function → special type of object

// console.log(typeof heros); // "object"
// console.log(typeof obj);   // "object"
// console.log(typeof func);  // "function" (function is technically a subtype of object)