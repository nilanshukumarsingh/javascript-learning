// * VAR is not block level scoped

const x = 100;
const foo = 1;
var bar = 2; // type window in console to check if it is added or not


if(true){
    const y = 100;
    console.log(x + y);
}

// console.log(x + y); // y is not defined

for(let i = 0; i <= 10; i++){
    console.log(i);
}
// console.log(i)  i is not defined

// * difference b/w var vs let
if(true){
    const a = 500;
    let b = 600;
    var c = 700;  // & If you have a variable that you created with var inside of an if statement that can that's accessible from outside
}
// console.log(a); // error
// console.log(b); // error
console.log(c); // VAR is not block scoped

function run(){
    var d = 100;
    console.log(d);
}
run();
// console.log(d); // * You can't access a var variable that's inside of a function outside of a function but you can with other blocks like loop and if statement 

