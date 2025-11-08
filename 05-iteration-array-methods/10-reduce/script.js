// ! Array.prototype.reduce()

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, passing in the erturn value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time the callback is run there is no "return value" of the previous calculation. iF supplied an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element [index 1 instead of indeex 0].

const numbers = [1,2,3,4,5,6,7,8,9,10];

const sum = numbers.reduce(function (accumalator, currentValue) {
    return accumalator + currentValue;
}, 0);
console.log(sum);

const sum1 = numbers.reduce((acc,cur) => acc + cur, 0); // 0 -> initial value means start at 0 our acc = 0 and current will be 1
console.log(sum1);

// Using a for loop
const sum2 = () => {
    let acc = 0;
    for(const cur of numbers){
        acc += cur;
    }
    return acc;
}
console.log(sum2());

// using forEach
let sum3 = 0;
numbers.forEach((number) => sum3 += number );
console.log(sum3);

const cart = [
    { id: 1, name: 'Product 1', price: 130},
    { id: 2, name: 'Product 2', price: 150},
    { id: 3, name: 'Product 3', price: 200},
];

const total = cart.reduce(function(acc, product){
    return acc + product.price;
},0);

const total1 = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(total);