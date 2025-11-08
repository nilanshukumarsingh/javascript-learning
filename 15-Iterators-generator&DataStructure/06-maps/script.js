/*
Map is key value pairs and key doesnt have to be string, it can be a number, array or an object. 
*/

const myMap = new Map();

myMap.set('name','John');
myMap.set(1,'blue');
myMap.set(2,'red');


console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));


console.log(myMap.size);

// has() -: to check if key exist
console.log(myMap.has(1));
console.log(myMap.has(3));

// delete
map.delete(2);

console.log(myMap);

// forEach
const peopleMap = new Map();
peopleMap.set('nilanshu', {phone: '555-555-5555', email: 'nilanshu@gmail.com'});
peopleMap.set('jack', {phone: '555-555-5555', email: 'jack@gmail.com'});
peopleMap.set('jill', {phone: '555-555-5555', email: 'jill@gmail.com'});

peopleMap.forEach((person)=> console.log(person.email));

console.log(peopleMap.keys()); // iterator with keys
console.log(peopleMap.values()); // iterator with values
console.log(peopleMap.entries()); // key and the object

// iterator
const iterator = peopleMap.values(); // you can use keys and entries also
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Convert maps to array
const peopleArray = Array.from(peopleMap);
console.log(peopleArray);
