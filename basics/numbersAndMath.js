// *********************** Numbers *************************

const score = 400
// console.log(score);  // 400 (primitive number)

const balance = new Number(100)  // Number object
// console.log(balance);         // [Number: 100]

// Convert to string
// console.log(balance.toString());         // "100"
// console.log(balance.toString().length);  // 3

// Format to fixed decimal places
// console.log(balance.toFixed(2));        // "100.00"

const number = 23.4567
// Rounds the number to a specific number of significant digits
// console.log(number.toPrecision(4));    // "23.46"

const otherNumber = 1000000
// Format with commas (default: US)
// console.log(otherNumber.toLocaleString());         // "1,000,000"
// Format with commas (India)
// console.log(otherNumber.toLocaleString('en-IN'));  // "10,00,000"


// *********************** Math Object *************************

// console.log(Math);                    // Math object

// Absolute value
// console.log(Math.abs(-5));

// Rounding values
// console.log(Math.round(3.4));
// console.log(Math.ceil(3.4));
// console.log(Math.floor(3.4));

// Min and Max
// console.log(Math.min(3, 1, 5, 8));
// console.log(Math.max(3, 1, 5, 8));

// Random values
// console.log(Math.random());                       // Random number between 0 and 1
// console.log((Math.random() * 10) + 1);            // Random number between 1 and 11
// console.log(Math.floor(Math.random() * 10) + 1);  // Random integer between 1 and 10

// Random number in a range (inclusive)
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // 10 to 20