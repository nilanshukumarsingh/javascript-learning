const age = 19;

// Using an if statement 
if(age >= 18){
    console.log('You can vote!');
}else {
    console.log('You can not vote');
}

// Using a ternary operator
// condition ? statement1 : statement2 
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// Assigning a condition value to a variable 
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);

// Multiple statements

// const auth = true;
// let redirect;

// if(auth){
//     alert('Welcome to the dashboard');
//     redirect = '/dashboard';
// }else{
//     alert('Acess Denied');
//     redirect = '/login';
// }

// const redirect1 = auth ? (alert('Welcome to dashboard'),'/dashboard') : (alert('Acess Denied'), '/login');
// console.log(redirect1);

//* We can use AND operator to use as shorthand when we dont have else condition
let check = true;
check = false; // * We wont able to see anything
check ? console.log('Welcome to the dashboard') : null;
// ? So shorthand is that to not use else null is to use double ampersand && 
check && console.log('Welcome to the dashboard');
