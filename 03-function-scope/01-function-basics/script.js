function sayHello(){
    console.log('Hello World');
}
sayHello(); // & invoking or calling the function

// * Passing data to a function
function add(num1, num2){
    console.log(num1 + num2);
}
add(1,2);

// Returning a function
function subtract(num1, num2){
    return num1 - num2;

    console.log('After the return');
}
const result = subtract(10,2)
console.log(result);


