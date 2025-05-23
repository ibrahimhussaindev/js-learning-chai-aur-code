// *********************** Comparisons ***********************

// Basic numeric comparisons
// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 <= 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// String and number comparison (type coercion (implicit conversion) happens)
// "2" is converted to number 2 before comparison
// console.log("2" > 1); // true
// console.log("02" > 1); // true (because "02" → 2)

// Comparisons involving null
// console.log(null > 0); // false (null is converted to 0 → 0 > 0 is false)
// console.log(null == 0); // false (== does not convert null to 0 here)
// console.log(null != 0); // true (null is only equal to undefined)
// console.log(null >= 0); // true (null → 0 → 0 >= 0 is true)
// console.log(null <= 0); // true (same reason as above)
// console.log(null < 0);  // false (0 < 0 is false)

// Comparisons involving undefined
// All result in false except !=
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined == 0); // false
// console.log(undefined != 0); // true
// console.log(undefined >= 0); // false
// console.log(undefined <= 0); // false

// *********************** Strict vs Loose Equality ***********************

// === checks both value and type (strict equality)
// console.log("2" === 2); // false (string !== number)

// == checks only value after coercion (loose equality)
// console.log("2" == 2); // true ("2" is coerced to number 2)