// Use require, whether it's your own module or your own file or an NPM package

const {message, capitalizeWords, makeMoney} = require('./utils');
const Person = require('./Person');


// const message = require('./utils');
console.log(message); // So will get object
console.log(message.text)// if you want to access text




// const capitalizeWords = require('./utils');
console.log(capitalizeWords('hello world'));

console.log(makeMoney(100));


// Class import
const person1 = new Person('John',30);
person1.greet();
