// FUnction declaration
function add1(a,b){
    return a + b;
}
console.log(add1(1,2));

// Function expression
const add = function(a , b){
    return a + b;
};
console.log(add(1,2));

// Arrow Function
const add2 = (a, b) => {
    return a+b;
}
console.log(add2(1,2));

// ^ Implicit Return
// we can declare arrow function as implicit return
const subtract = (a, b) => a - b; // this is an implicit return because we're not specifiying the return keyword
console.log(subtract(10,5));

// ? Single parameter
// const double = (a) => a*2; // it is not necessary to have a bracket in single parameter
// const double = a,b => a*2; // if we have more than one param it wont work

// * can leave off () with a single param
const double = a => a*2;
console.log(double(10));

// Returning an object
const createObj = () => {
    name : 'Brad';
};
console.log(createObj()); //? Dont declare like this it  will give undefined use paranthesis 

const createObj1 = () => ({
    name: 'Brad',
});
console.log(createObj1);


const numbers = [1,2,3,4,5];
numbers.forEach(function (n){
    console.log(n);
})


// Arrow function in callback
numbers.forEach(n => console.log(n));