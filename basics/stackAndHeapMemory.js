// *********************** Stack (Primitive) ***********************

// In JavaScript, primitive types (String, Number, Boolean, null, undefined, Symbol, BigInt)
// are stored in the **stack**. When you assign them to another variable, a **copy** is created.

let name = "Ibrahim Hussain"

let fullName = name                // A copy of 'name' is assigned to 'fullName'
fullName = "Syed Ibrahim Hussain"  // Only 'fullName' changes, not 'name'

console.log(name);                 // Output: "Ibrahim Hussain"
console.log(fullName);             // Output: "Syed Ibrahim Hussain"


// *********************** Heap (Reference / Non-Primitive) ***********************

// Non-primitive types (Objects, Arrays, Functions) are stored in the **heap**.
// When you assign them to another variable, it creates a **reference**, not a copy.

let userOne = {
    email: "user@gmail.com",
    id: 123321
}

let userTwo = userOne // Both variables point to the same object in the heap

userTwo.id = 321      // Changing 'userTwo' also affects 'userOne'

console.log(userOne); // Output: { email: "user@gmail.com", id: 321 }
console.log(userTwo); // Output: { email: "user@gmail.com", id: 321 }