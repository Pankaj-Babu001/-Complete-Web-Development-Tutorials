// Dates 

// let date = new Date();
// console.log(date.toString()); // Current date and time
// console.log(date.toDateString()); // Current date in human-readable format
// console.log(date.toLocaleString()); // Current time in local format
// console.log(typeof date); // "object"

let myCreatedDate = new Date("01-14-2023"); 

// console.log(myCreatedDate.toDateString()); // "Sat Dec 17 2005"
// let myCreatedDate2 = new Date(2005, 11, 17, 5, 24); 

// let myCreatedDate2 = new Date("2005-01-14"); 
// console.log(myCreatedDate2.toDateString()); // "Mon Jan 17 2005"

let myTimeStamp = Date.now()

// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());

newDate.toLocaleDateString('default', {
    month: 'long',
    weekday: 'narrow',
    year: 'numeric'
})

