let x;

x = 5 + '5';

x = 5 + Number('5');

x = 5 * '5'; // It converted or coerced into the number

x = 5 + null; // so NULL is actually coerced into a zero and wew
x = Number(null); // output 0

x = Number(0);

x = Number(true);
x = Number(false);

x = 5 + true; // 6 ? True is being coerced into a number and true as a number is one
x = 5 + false;

x = 5 + undefined; // NaN


console.log(x, typeof x);