// alert('Hello');
// console.log(innerWidth);

const x = 100;
console.log(x, 'in global');

function run(){
    console.log(window.innerHeight);
    console.log(x, 'in function');
}
run();

if(true){
    console.log(x, 'in block');
}

function add(){
    const x = 1; // * It is overwriting the globally scoped X value and this calld variable shadowing.
    const y = 50; // function scope
    console.log(x + y);
}
// console.log(y) // error because it is looking into an global scope

add();
