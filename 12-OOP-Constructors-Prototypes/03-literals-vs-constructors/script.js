const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit); // Hello String
console.log(strObj, typeof strObj); // Hello Object

// * What happens is ?
// & boxing because we can't use a method on a primitve data type. So what happens is behind the scenes, javascript adds a wrapper, object to the literal and basically turns it into the object so that is what boxing is but the type will always be string.

// !BOXING -: is when javascript adds the wrapper object onto a literal unboxing is when an object.
console.log(strLit.toUpperCase(), typeof strLit); 
console.log(strLit[0]);

// !Unboxing:  is when object is turned back into a literal.
console.log(strObj.valueOf(), typeof strObj.valueOf());

// Now because of boxing there is a still a constructor property on a literal.
console.log(strLit.constructor); // constructor of string object
console.log(strObj.constructor);

console.log(strLit instanceof String); // Because of literal we get false.
console.log(strObj instanceof String); // Yes it is, we created with new String()


// -> Now we have constructos for other types as well for number, boolean, array and even function and object.
// ^ Other types
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);
console.log(boolObj, typeof boolObj);

const arrLit = [1,2,3,4,5];
const arrObj = new Array(1,2,3,4,5);

// Array is an object if we convert than also it will be an object
console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);


const funcLit = function(x){
    return x*x;
}
console.log(funcLit, typeof funcLit); // 'function' is still an object
console.log(funcLit(5));

const funcObj = new Function('x', 'return x*x'); // In constructor two argument, first actuall argument and second function body

console.log(funcObj(3));

const obj1 = {};

const obj2 = new Object();

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);



