// ^ Execution Context
/*
* When you run any javscript, a special environment is created to handle the transformation and execution of code. This is colled execution context.It contains the currently running code and everything aids in its execution.

*There is global execution context as well as function execution context for function invoked

So javascript is single threaded language (thread is like a process) and your code is executed line by line on that thread or process
*/

//^ How to degub in browser
const x = 100;
const y = 50;

function getSum(n1, n2){
    const sum = n1 + n2;
    return sum;
}

const sum1 = getSum(x,y);
const sum2 = getSum(1,2);
console.log(sum1,sum2);
