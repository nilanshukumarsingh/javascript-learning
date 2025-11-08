const myString = 'developer';
//Answer1
let myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Answer2
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Answer3
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`
console.log(myNewString)