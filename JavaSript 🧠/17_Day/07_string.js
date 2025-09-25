const name = "Pankaj Kumar"

const repoCount = 100
// console.log(name + repoCount + "Value"); 


console.log('Hello my name is ${name} and my repo count is ${repoCount}'); 

const gameName = new String('PUBG-Mobile-com');

// console.log(gameName); 
// console.log(gameName.__proto__); 

// console.log(gameName.length); // 11
// console.log(gameName.toUpperCase()); // PUBG MOBILE

console.log(gameName.charAt(0)); // P
console.log(gameName.indexOf('M')); // 5
console.log(gameName.lastIndexOf('P')); // 0

const newString = gameName.substring(0, 4); // PUBG
console.log(newString); // PUBG

const anotherString = gameName.slice(-8, 4); // PUBG
console.log(anotherString); // PUBG

const newStringOne = "   Pankaj Kumar   ";
console.log(newStringOne); //    Pankaj Kumar
console.log(newStringOne.trim()); // Pankaj Kumar

const url = "https://github.com/Pankaj%20Babu001";

console.log(url.replace('%20', '-')); 

console.log(url.includes('Pankaj')); // true
console.log(url.startsWith('ABCDE')); // true

console.log(gameName.split('-')); // [ 'PUBG', 'Mobile', 'com' ]