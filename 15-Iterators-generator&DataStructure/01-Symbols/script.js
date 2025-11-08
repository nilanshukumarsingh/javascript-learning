/*
* Symbols :- can be used with iterators. Symbols are just primitive data type like strings and numbers.
Now symbols are used to create unique identifiers for object. If both symbols has unique idnetifiers than they are not equal they are unique.


*/

const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2);
console.log(typeof sym);

console.log(sym.description);
console.log(sym1.description);

// Symbols are unique
console.log(Symbol('sym') === Symbol('sym'));  //false

// & Instead of doing this `id: 1`  than do symbol
const user = {
    [Symbol('id')]: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
};

/*
^ So I cant change the id of symbol
    user.id = 2;      // iT will just add the extra property this not change the symbol

console.log(user['name']); // John Doe
console.log(user[Symbol('id')]); // undefiend 
We get undefined because these are not same as that symbol(id)


*/

console.log(user);

// ^ Symbols are NOT enumerable
console.log(Object.keys(user)); // you wont see symbol id there.... 
console.log(Object.values(user)); // only value we see

for(let key in user){
    console.log(key);
}


//* Use method called getOwnProperty() to get an array of all symbols in an object 
// getOwnPropertySymbols()
console.log(Object.getOwnPropertySymbols(user));


// ^ Other way to create symbol
//^ Symbol.for()  
// This symbol take function that takes a string as its parameter and it will search for exisiting symbol that have same string as description. if it doesnt find one it will create a new symbol with that string as its description. It is stored in global symbol registery.
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4); //true
// How? So `.for` it uses that global registery
// if we remove `.for` it gives false

//^ Symbol.keyFor() -:
console.log(Symbol.keyFor(sym3)); // foo
console.log(Symbol.keyFor(sym1)); // undefined [because not created with .for]

// ^ toString()
console.log(sym1.toString());
console.log(sym3.toString());
console.log(sym.toString());

//^ valueOf()
console.log(sym3.valueOf());
console.log(sym1.valueOf());
console.log(sym.valueOf());

// We can check how many property are there....
console.log(Object.getOwnPropertyNames(Symbol))



