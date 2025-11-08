/*
// & Change String to Number
let amount = '100';
// ^ 1) parseInt() function  -> it will convert it to number
amount = parseInt(amount);

// ^ 2) Unary operator -> it will convert it to number
amount = +amount 

// ^ 3) Number method or number constructor ->
amount = Number(amount);
*/


/*
// & Change number to string
let amount = 100;
amount = amount.toString();
/* 
! We know that amount is number and it is primitive type which means it is not an object. Now methods are properties of objects. So why does it work?  
* JavaScript actually creates a temporary wrapper. If when we use to string, it creates a temporary wrapper of the appropriate object type.So this amount, which is primitive type, doesnt intrinsically have any methods on it because it's not an object. But since we're trying to use string on it javascript creates a temporary wrapper of the associated type.
amount = String(amount);

*/


/*
// & Convert string to decimal
let amount  = '99.5';
amount = parseFloat(amount);
*/

/*
// & Convert number to boolean
let amount = 1; 
amount = 0; 
amount = Boolean(amount);
*/

// ^ NaN
let amount = 'hello';
amount = parseInt(amount);  // * Output: NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo'/3);


console.log(amount, typeof amount);