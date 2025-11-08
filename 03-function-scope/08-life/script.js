const user = 'John'; // * We will get error as it is declared as global scope so we will use IIFE

// ^IIFE

(function () {
    const user = 'John';
    console.log(user);

    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

// hello(); // * If i declared here I will get an error

(function (name){
    console.log('Hello ' + name);
})('Shawn');

(function hello(){
    console.log('hello');
    hello(); // * What it will do it wall call again and again the function will go into recursion
})(); 




