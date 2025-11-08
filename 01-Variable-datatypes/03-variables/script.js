// ? Ways to declare a variable
/*
 * var
 * let
 * const
*/

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName,lastName);
/* 
console.log(firstName,lastName,age); 

* if age is declared with let it will give error as it should be initialized before 
let age = 30;

& If we use var it will show undefined, it is due to hoisting
var age = 30;
*/

let age = 30;
console.log(age);


// ? Naming Conventions
/*
& -Only letters, numbers, underscores, and dollar signs
& -Can't start with a number
*/
// let 1name = 'Brad'; // error
let name1 = 'Brad'; // work


/* Multi-Word Formatting
 * firstName = camelCase
 * first_name = underscore
 * FirstName = PascalCase
 * firstname = lowercase 
*/

// ? Re-assigning Variables
age = 31;
console.log(age);

let score;
score = 1;
console.log(score);

if(true){
    score = score + 1;
}
console.log(score);

const x = 100;
// x = 200; // ! Constant cant be directly reassigned 
// const score1; // ! Constant must be initialized

const arr = [1, 2, 3, 4];
// arr = [1,24,5,6]; // Will give me error
//& you cannot reassign the array itself, but you can modify its contents (i.e., push, pop, splice, etc.).
arr[2] = 100;
arr.push(5);
arr.pop();
console.log(arr);

// Same for object 
// person = { age: 30 }; // ❌ TypeError: Assignment to constant variable.
const person = {
    name : 'Brad',
};
person.name = 'Nilanshu';
person.email = 'nilanshu@gmail.com';

console.log(person);

// Declare multiple at once
let a,b,c;
const d = 10, e = 20, f = 30;
console.log(d);
console.log(a); // Undefined ? as there is no initialization
