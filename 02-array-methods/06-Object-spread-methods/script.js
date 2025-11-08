let x;

//^ We can create an empty objects this an object literals
// const todo = {};

// todo.id = 1;
// x = todo;

// We can do same thing with object constructor
const todo = new Object();
todo.id = 1;
todo.name = 'Buy Milk';
todo.complete = false;

x = todo;

// ? How to create on constructor on certain object
// const todo1 = new Todo();


// ^ Nesting object
const person = {
    address: {
        coords: {
            lat: 32.9384,
            lng: -71.3232,
        },
    },
};

x = person.address.coords.lat;

// ^ Spread Operators -> It works similar to arrays 
// ? If you want to take the properties of obj1 and obj2 and put them basically combine them into single obj3 you can use spread operator (...) 
const obj1 = {a: 1, b: 2,};
const obj2 = {c: 3, d: 4};

// const obj3 = {obj1, obj2};
//const obj3 = {...obj1, ...obj2}; // * the top level of object three because we took them and spread them across
// const obj3 = {...obj1, obj2}; //On the top level spread across, but object two is in there as nested object.

//^ Object Assign -> it does the same thing like spread operator
const obj4 = Object.assign({}, obj1, obj2); // Whatever the propertes we give like obj1, obj2 will be assign to empty object.
x = obj4;

// & Array of object
const todos = [
    { id: 1, name: 'Buy Milk'},
    { id: 2, name: 'Pickup kids from school'},
    { id: 3, name: 'Take out trash'},
];

x = todos[0].name;


// ^ Object.keys -> If you want to get all of the kyes in an object and put those into an array
x = Object.keys(todo); // You'll see that it just took the keys from this todo object and put them into 

x = Object.keys(todo).length;

// ^ Object.values -> If you want to get an array with all the values.
x = Object.values(todo);

// ! Now if you want to get an array of the key value pairs, you can od with entries
x = Object.entries(todo); //  Array with key value pairs


// Boolean indicating if object has specific property
x = todo.hasOwnProperty('name'); // true    (it return true if it has name as property)

x = todo.hasOwnProperty('age'); // false


console.log(x);


