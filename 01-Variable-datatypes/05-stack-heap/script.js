// * Values are stored in the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
    name: 'Brad',
    age: 40,
};

let newName = name; // It both pointing to he same spot in heap
newName = 'Johnathan'; // If we changing newName than 'name' also will be changed 
console.log(name,newName);

let newPerson = person;
newPerson.name = 'Bradely';
console.log(person,newPerson);




