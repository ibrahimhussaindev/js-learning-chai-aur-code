// *********************** String Interpolation & Concatenation ***********************

const fName = "Ibrahim"
const repoCount = 2

// String concatenation (old way)
console.log(fName + repoCount + " Value");

// Template literal (modern way, cleaner and readable)
console.log(`Hello my name is ${fName} and my repo count is ${repoCount}`);

// *********************** String Object & Methods ***********************

const email = new String('abc@gmail.com') // Creates a string object
console.log(email);               // Outputs string object with properties/methods
console.log(typeof email);        // "object" (because it's created with 'new String')

console.log(email[3]);         // "@"
console.log(email.__proto__);  // Shows String prototype with all methods

console.log(email.length);         // Total number of characters
console.log(email.toLowerCase());  // Converts to lowercase
console.log(email.toUpperCase());  // Converts to uppercase
console.log(email.charAt(2));      // Character at index 2 → "c"
console.log(email.indexOf('.'));   // First occurrence of '.' → 7
console.log(email.lastIndexOf('c')); // Last 'c' → 6

const string = email.substring(0, 3)
console.log(string);                // "abc" (start: 0, end: 3 — does not include end index)

// .slice can also take negative indexes
const newstring = email.slice(0, 4)      // "abc@"
console.log(newstring);

const anotherString = "        abc           "
console.log(anotherString);          // Original string with spaces
console.log(anotherString.trim());  // Removes whitespace from both ends → "abc"

const url = "https://abc.com/ibrahim%20hussain"

// Replaces "%20" (space encoded in URL) with "-"
console.log(url.replace('%20', '-'));
// Output: "https://abc.com/ibrahim-hussain"

// .includes checks if substring exists
console.log(url.includes('ibrahim')); // true
console.log(url.includes('xyz'));     // false

// .split converts string to array, splitting at '@'
console.log(email.split('@'));
// Output: ["abc", "gmail.com"]