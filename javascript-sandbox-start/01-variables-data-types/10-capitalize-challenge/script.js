// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';
const myNewString = myString.charAt(0).toUpperCase() +myString.substring(1);
console.log(myNewString);

myNewString2 = myString[0].toUpperCase() + myString.slice(1);
console.log(myNewString2);

myNewString3 = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString3);