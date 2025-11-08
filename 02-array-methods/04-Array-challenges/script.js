const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0)
arr.reverse();


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// ^ Answer1
// const arr3 = arr1.splice(0,4).concat(arr2);

// ^ Answer 2
const arr3 = [...arr1, ...arr2];
arr3.splice(4,1);
console.log(arr3);