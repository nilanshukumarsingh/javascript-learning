/*
So sets are data structure that allow us to store a collection of unique values.
So they are unordered and dont allow duplicates.
*/

// const set = new Set([1,2,2,3,3,4,4,4]);
const set = new Set([1,2,3,4]);
console.log(set)


set.add(5);

console.log(set.has(3)); // true
console.log(set.has(6)); // false

// remove from set
set.delete(5);
console.log(set.has(5));

const setArray = Array.from(set);
console.log(setArray); // we wuill get set of array

for(let item of set){
    console.log(item);
}

// ^ Create an iterator on set
const iterator = set.values();  // it gives iterator
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


set.clear();

console.log(set);
