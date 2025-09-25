const accountId = 123456

let accountEmail ="pankajbabu124@gmail.com"
var accountPassword ="123456"
accountCity = "Patna"
let accountState;
// accountId = 2 // Is not allowed

/* 
Prefer not use var
because of issue in block scope and functional scope 
*/

accountEmail ="pankaj@gmail.com"
accountPassword ="321456"
accountCity = "Gaya"

console.log(accountId);
console.table([accountId, accountEmail ,accountCity, accountPassword, accountState])