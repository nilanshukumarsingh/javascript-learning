//! JSON -> Javascript object notation ad it's a lightweight data interchange format. So it's a essentially way of stroing data in a simple, human readable format.
// API is to send and receive the data to and from a server. And several years ago XML, which is extensible Markup language was kind of the standard for sending data or getting data from server. But in recent years JSON has become standard.

// * Usually JSON files is going to have usually adjacent file is going to have an array of JSON objects, so you would have brackets just like in javascript [ ] and then each object would have curly braces, but your keys have to have double quotes. So properties keys and values must be in double quotes


// ! How can we convert our objects to JSON

// Object
const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// Convert to JSON String
// ^ JSON.stringify -> Will turn an object into JSON string.
// * Now when you use like the fetch API or other libaries to make HTTP requests, a lot of time it does this. We use stringfy and parse.
const str = JSON.stringify(post);
// You cant access json string like if you want to access this id
// console.log(str.id); // undefined

// * SO to access the properties you need parse it



console.log(str);


// Local Storage is a way of store things on your client in your browser and they can only store it, can only store strings. You can't store like object. So what will you do is stringify your object, put it into local storage, and then when you take it out, you would parse it back into an object.

// ! Parse JSON
const obj = JSON.parse(str);

// To access properties
console.log(obj.id);

// * It is not compulsory it should be always object it can be arrays
const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    }
];

const str2 = JSON.stringify(posts); // We have adjacent string that has a couple of array, that is couple of objects inside an array.


console.log(str2); 
