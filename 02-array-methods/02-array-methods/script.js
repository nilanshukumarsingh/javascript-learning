let x;

const arr = [34, 55, 95, 20, 15];

// ^ 1)push -> to add elements at last
arr.push(100);

// ^ 2) pop -> to remove an element from last
arr.pop();

// ^ 3) unshift => to add beginning of array
arr.unshift(10);

// ^ 4) shift -> remove from starting array
arr.shift();

// ^ 5) reverse -> to reverse an array 
// arr.reverse();

// ^ 6) incudes() -> which will allow you to check and see if a specific values in that array
x = arr.includes(20); // true
x = arr.includes(100); // false
  
// ^ 7) indexof() -> it will give specific value 
x = arr.indexOf(15); //  4
x = arr.indexOf(340); // -1 it is not present

// ^ 8) slice() -> both will return selected element array. It wont change the original array.
x = arr.slice(1,4); // [55,95,20]

// ^ 9) splice() -> it do same but it does change the original array. We can remove an element from an array 
// x = arr.splice(1,4);
// x = arr.splice(3,1); // 3 is the index which you want to delete and 1 is the total elements you want to delete

// ! How you can chain methods
x = arr.splice(1,4).reverse().toString().charAt(0);


console.log(x, arr);