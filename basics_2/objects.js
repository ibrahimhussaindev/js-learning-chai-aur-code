// **************************** Singleton Object (using constructor) ****************************

// Object.create                         // create object using constructor method

// const appUser = new Object()        // Singleton object
const appUser = {}                  // Non-singleton (object literal)

appUser.id = "123asd"
appUser.name = "Ibrahim"

// console.log(appUser);


// **************************** Object Literals ****************************

const sym = Symbol("key1")             // Unique key using Symbol
const user = {
    name: "Ibrahim",
    "last name": "Hussain",           // Property with space needs quotes
    [sym]: "myKey1",                  // Computed property with Symbol
    age: 19,
    location: "Karachi"
}

// Accessing properties
// console.log(user.age);
// console.log(user["name"]);
// console.log(user["last name"]);
// console.log(user[sym]);

user.location = "Karachi Pakistan"           // Updating value
// Object.freeze(user)                       // Freezes object, disallows further changes
user.location = "Pakistan"                   // No effect if frozen
// console.log(user);

// Adding methods to the object
user.greeting = function greeting() {
    console.log("Hello User");
}
user.greeting2 = function() {
    console.log(`Hello User, ${this.name}`);
}

// console.log(user.greeting);             // Function definition
// console.log(user.greeting2);            // Function definition
// user.greeting2()                        // "Hello User, Ibrahim"
// console.log(user);


// **************************** Nested Objects ****************************

const anotherUser = {
    email: "abc@gmail.com",
    fullName: {
        fName: "Ibrahim",
        lName: "Hussain"
    }
}

// console.log(anotherUser.fullName.fName);      // Ibrahim


// **************************** Merging Objects ****************************

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)       // Merges into new object
const obj3 = { ...obj1, ...obj2 }                  // Spread syntax (modern way)

// console.log(obj3);                      // {1: "a", 2: "b", 3: "c", 4: "d"}


// **************************** Array of Objects ****************************

const users = [
    { id: 1, email: "a@gmail.com" },
    { id: 2, email: "b@gmail.com" },
    { id: 3, email: "c@gmail.com" }
]

// console.log(users[1].email);        // b@gmail.com


// **************************** Object Methods ****************************

// console.log(appUser);
// console.log(Object.keys(appUser));             // ['id', 'name']
// console.log(Object.values(appUser));           // ['123asd', 'Ibrahim']
// console.log(Object.entries(appUser));          // [['id', '123asd'], ['name', 'Ibrahim']]

// console.log(appUser.hasOwnProperty('name'));   // true


// **************************** Destructuring ****************************

const course = {
    courseName: "JS course",
    price: "499",
    courseInstructor: "Ibrahim"
}
// course.courseInstructor

// Destructuring with alias
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);                           // Ibrahim


// **************************** JSON Format Example ****************************

// JSON syntax (not JavaScript):
// {
//     "courseName": "JS course",
//     "price": "499",
//     "courseInstructor": "Ibrahim"
// }

// Array of JSON-like objects
[
    {},
    {},
    {}
]