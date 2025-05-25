// *********************** Dates & Time *************************

let myDate = new Date()

// Various formats of current date and time

// Full date object in UTC (ISO format)
console.log(myDate);                     // 2025-05-25T11:31:22.631Z

// Local date and time as a string
console.log(myDate.toString());          // Sun May 25 2025 16:31:22 GMT+0500 (Pakistan Standard Time)

// Human-readable date string
console.log(myDate.toDateString());      // Sun May 25 2025

// Human-readable time string
console.log(myDate.toTimeString());      // 16:31:22 GMT+0500 (Pakistan Standard Time)

// ISO format (standard)
console.log(myDate.toISOString());       // 2025-05-25T11:31:22.631Z

// Same as ISO format
console.log(myDate.toJSON());            // 2025-05-25T11:31:22.631Z

// Date in local format (e.g., 5/25/2025)
console.log(myDate.toLocaleDateString()); // 5/25/2025

// Time in local format (e.g., 4:31:22 PM)
console.log(myDate.toLocaleTimeString()); // 4:31:22 PM

// Full date and time in local format
console.log(myDate.toLocaleString());     // 5/25/2025, 4:31:22 PM

console.log(typeof myDate);              // "object" (Date is an object)


// *********************** Creating Custom Dates *************************

let createdDate = new Date(2025, 6, 22)      // Month is 0-based (6 = July)
console.log(createdDate.toDateString());    // Tue Jul 22 2025

let myCreatedDate = new Date(2025, 6, 22, 12, 40)
console.log(myCreatedDate.toLocaleString());  // "7/22/2025, 12:40:00 PM"

let anotherCreatedDate = new Date("2025-07-22")   // Using ISO date format
let otherDate = new Date("07-22-2025")         // Using MM-DD-YYYY format
console.log(otherDate.toLocaleString());       // "7/22/2025, 12:00:00 AM"


// *********************** Timestamps *************************

let myTimeStamp = Date.now()                      // Current timestamp in milliseconds
// console.log(myTimeStamp);                      // Example: 1748179082631
// console.log(anotherCreatedDate.getTime());     // Timestamp of a specific date
// console.log(Math.floor(Date.now() / 1000));    // Current timestamp in seconds


// *********************** Date Components *************************

let newDate = new Date()
console.log(newDate);                 // Full current date
console.log(newDate.getDay());        // Day of the week (0 = Sunday)
console.log(newDate.getMonth());      // Month (0 = January)
console.log(newDate.getDate());       // Day of the month
console.log(newDate.getFullYear());   // Full year


// *********************** Custom Locale Format *************************

// Get a formatted string like "Saturday, 25 May"
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric",
    month: "long"
}));