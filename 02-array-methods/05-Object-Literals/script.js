// * Object Literals -> A commond data structure that hold keys/value pairs
/*
const person = {
    name: 'John Doe',
    age: 18,
};
*/

let x; 

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;

person.haschilren = true;

// ^ function
person.greet = function() {
    console.log(`Hello my name is ${this.name}`);  // & this.name => access the other properties from this keyword
};

person.greet();

// Whenever you are creating your keys you can use like double or single quote for words
const person2 = {
    'first name': 'Brad',
    'last name': 'Traversary',

};
// x = person.first name;  you cant access like this rather you use [] or put underscore b/w name
x = person['first name'];

x = person2;
console.log(x);

