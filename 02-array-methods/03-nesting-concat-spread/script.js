let x;


const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry',]

// fruits.push(berries);

// x = fruits[3][0];

const allFruits = [fruits, berries];

x = allFruits[1][0];

// ^ concat -> it is not like putting the array inside the array, but it's taking the items from one array and basically adding them in different array.
x = fruits.concat(berries);

// ^ Spread Operator -> (...) this can be used in arrays as well as objects. 
// I just want the items that are in fruit and berries not the actual array itself
x = [...fruits, ...berries]; //& same result like we did in concat. It basically taken all the items from array and put it into one

//^ #Flatten Arrays -> To make an array into one array that has one through eight.
const arr = [1,2,[3,4],5,[6,7],8];
x = arr.flat();

// * Static Methods on Array Object

// * Array.isArray()
x = Array.isArray(fruits); // & It is used to check if it present in array or not
x = Array.isArray('Hello');


// * Array.from -> Which will create an array from an array like value 
x = Array.from('123456'); // It takes string and give me array in an element

// * Array.of -> which will create an array from a set of values.
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);


console.log(x);