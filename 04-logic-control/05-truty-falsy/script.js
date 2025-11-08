const email = 'test@test.com';

if(email){
    console.log('You passed in an email');
}
console.log(Boolean(email));


// ^ Falsy Values
// * false
// * 0
// * "" or '' (Empty String)
// * null
// * undefined
// * NaN

let x = '';
x = false;
x = 0;
x = null;
x = undefined;
x = NaN;
if(x){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}
console.log(Boolean(x));


// ^ Truthy Values:
/*
* Everthy else that is not falsy
* true
* '0' (0 is a string)
* ' ' (space is a string)
* 'false' (false is a string)
* [] (empty arry)
* {} (empty object)
* function () {} (empty function)
*/

let y = true;
y = '0';
y = ' ';
y = 'false';
y = [];
y = {};
y = function () {};
if(y){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}
console.log(Boolean(y));


// & Truthy and falsy caveats
// Webforms that is asking how many children we have and we want to validate the form also
const children = 0;
// 0 -> falsy && 1 -> truthy
if(!isNaN(children)){
// if(children !== undefined){
    console.log(`You have ${children} children`);
}else{
    console.log(`Please enter number of children`);
}

// ^ Checking for empty arrays
// eg you have blog post and you want to show that there is no post
const posts = ['Post one', 'Post Two'];
const len = posts.length;
if(len > 0){
    console.log('List Posts');
}
else{
    console.log('No Posts To List');
}


// Checking for empty objects
const user = {
    // name: 'Brad',
};
// iF it is empty than also it showing list user
if(Object.keys(user).length > 0){
    console.log('List user');
}else{
    console.log('No user');
}

// Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);