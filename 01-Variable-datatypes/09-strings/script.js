let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

//* Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

//* String Properties and Methods
// * Properties doesn't use brackets it is more like attributes but methods use brackets t is like function
// const s = 'Hello World'; // String
const s = new String('Hello World'); // Wrapper make it object
x = typeof s;

x = s.length;

// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase(); // It will convert it into uppercase
x = s.toLowerCase(); // It will convert it into lowercase

x = s.charAt(0); // It will return a character at specific index

x = s.indexOf('e') // Index of specific character and if the character is repeating it will give first word index

x = s.substring(0,4) // It will search a string for a specified value 
x = s.substring(7); // It started at 7 and get the rest of the string

x = s.slice(); // It is just like substring just one difference is that we can start from the end with negative numbers
x = s.slice(-11, -6);

x = '          Hello World';
x = x.trim(); // Trim the whitespace 

x = s.replace('World', 'John'); // Replace a string

x = s.includes('Hello'); // Which will return true or false if a string is found within that string 

x = s.valueOf(); // Return the primitive type of the variable
// If we want to get the true primitive of that which is a string we would use value of. 

x = s.split(' '); // It'll split a string into an array and it takes in a separator as an argument. 
x = s.split('');//to split every character into an array item, then it would be just one quote



console.log(x);