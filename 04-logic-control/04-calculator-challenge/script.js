const calculator = (a,b,op) =>{
    if(op === '+'){
        return a + b;
    }else if(op === '-'){
        return a - b;
    }else if(op === '*'){
        return a * b;
    }else if(op === '/'){
        return a / b;
    }else{
        return 'Error';
    }
};

function calculator1(num1, num2, operator){
    let result;

    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid Operator';
    }
    console.log(result);
    return result;
}

calculator1(5,2,'+')
// console.log(calculator(5,2,'+'));
// console.log(calculator(5,2,'-'));
// console.log(calculator(5,2,'*'));
// console.log(calculator(5,2,'/'));
// console.log(calculator(5,2,'&'));