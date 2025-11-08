// const num = 5;
let x;

// const num = new Number(5.4227);
const num = new Number(5);

x = num.toString(); // It converted number to string

//* to know how much is the length of the number
x = num.toString().length;

//* It allow you to specify the number of decimal points
x = num.toFixed(2); // 5.00      and type will be string and it round of too for eg if number is 5.4456 -> 5.45

//* We count the whole number 
x = num.toPrecision(2); // it will give two digits with decimal points

x = num.toExponential(2);

// By default it will give where your are 
x = num.toLocaleString('en-US');
x = num.toLocaleString('ar-EG'); // That is the representation of number 5 in egypt

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;


console.log(x);
console.log(typeof x);