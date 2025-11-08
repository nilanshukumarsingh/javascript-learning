// & Primitive Data types
// * String
const firstName = 'Sara';
// const output = firstName


// * Number
const age = 30;
const temp = 98.9;

// const output = temp;


// * Boolean 
const hasKids = true;
// const output = hasKids;


// * Null
const aptNumber = null;
// const output = aptNumber;


// * Undefined
// let score;
const score = undefined;
// const output = score; 


// * Symbol
const id = Symbol('id');
// const output = id;


// * BigInt
const n = 9800000000088n;
// const output = n;


// & References types -> Any reference type is object
// * Arrays
const numbers = [1,2,3,4];
// const output = numbers;


// * Object
const person = {
    name : 'Brad',
};
// const output = person;


//* Function
function sayHello(){
    console.log('Hello');
}
const output = sayHello;

console.log(output, typeof output); 