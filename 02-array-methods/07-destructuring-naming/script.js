const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    // if it is same you dont have to need to write in both
    // firstName: firstName,
    // lastName: lastName,
    // age: age,
    firstName,
    lastName,
    age,
};

console.log(person.age);


// Destructuring 

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    }
};

// const id = todo;
//const { id } = todo; //* So we want to set this equal to the object itself and then any properties we want to extract or destracture are going to curly braces

// const { id, title, user: { name } } = todo;

// console.log(id, title);
// console.log(user);
// console.log(name);


// ? Now another thing we can do is rename the properties or keys

const{
    id: TodoId, // let say I am destructuring ID, but lets say I want to rename it to do ID.
    title,
    user: { name }, // curly braces if you are using its means you are destructuring
} = todo;

console.log(TodoId);


// Destructure arrays
const numbers = [23, 67, 33, 49];

const[first, second] = numbers;
console.log(first, second);  

// * Now if you want to get the rest of the numbers and put them into a variable as an array, we use rest operator (it same like spread operator {...} )
const[fir, sec, ...rest] = numbers;
console.log(fir,sec,rest); // rest will contain the values that are left in an array 


