// *********************** Arrays in JavaScript *************************

const arr = [0, 1, 2, 3, 4, 5];
// console.log(arr[0]);              // Accessing array element by index

const myArr = new Array(1, 2, 3, 4)  // Using Array constructor
// console.log(myArr);               


// *********************** Array Methods *************************

// arr.push(6)        // Adds 6 to the end
// arr.pop()          // Removes last element

// arr.unshift(7)     // Adds 7 at the beginning
// arr.shift()        // Removes first element


// console.log(arr.includes(8));   // false (checks if value exists)
// console.log(arr.indexOf(8));    // -1 (not found)
// console.log(arr.indexOf(3));    // 3 (found at index 3)

const newArr = arr.join()        // Joins all elements into a string separated by commas
// console.log(arr);             // Original array remains unchanged
// console.log(newArr);          // "0,1,2,3,4,5"
// console.log(typeof newArr);   // string


// *********************** Slice vs Splice *************************

// console.log("A ", arr);             // Original array

// const myNewArr = arr.slice(1, 3)    // Returns elements from index 1 to 2 (non-destructive)
// console.log(myNewArr);              // [1, 2]
// console.log("B ", arr);             // Original array remains the same

// const myNewArr2 = arr.splice(1, 3)   // Removes elements from index 1, count = 3 (destructive)
// console.log(myNewArr2);              // [1, 2, 3]
// console.log("C ", arr);              // Modified original array [0, 4, 5]


// *********************** Merging Arrays *************************

const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "batman", "flash"]

// marvelHeros.push(dcHeros)          // Adds dcHeros array as a single element
// console.log(marvelHeros);          // ["thor", "ironman", "spiderman", [Array]]
// console.log(marvelHeros[3]);       // ["superman", "batman", "flash"]
// console.log(marvelHeros[3][1]);    // "batman"

// const heros =  marvelHeros.concat(dcHeros)     // Combines both arrays into one (returns a new array)
// console.log(heros);

const allHeros = [...marvelHeros, ...dcHeros]    // Spread operator to merge arrays
// console.log(allHeros);


// *********************** Flattening Arrays *************************

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [5, 6, [7, 8]]]
const flatArr = anotherArr.flat(Infinity)        // Flattens deeply nested array
console.log(flatArr);                            // [1, 2, 3, 4, 5, 6, 7, 5, 6, 7, 8]


// *********************** Array Utility Methods *************************

console.log(Array.isArray("Ibrahim"));        // false (string is not an array)
console.log(Array.from("Ibrahim"));           // ['I', 'b', 'r', 'a', 'h', 'i', 'm']
console.log(Array.from({name: "Ibrahim"}));   // [] (returns empty array, can't convert object directly)

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));   // Creates array from individual values [100, 200, 300]