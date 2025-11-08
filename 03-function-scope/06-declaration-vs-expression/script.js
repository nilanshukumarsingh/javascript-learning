// ^ Function Declaration

console.log(addDollarSign(100)); // We are calling a funciton before declaring it ? It is because of hoisting

function addDollarSign(value){
    return '$' + value;
}

// console.log(addDollarSign(100));



// ^ Function Expression
// console.log(addPlusSign(200)); // Hoisting only work on function declartion not expression it will give error

const addPlusSign = function(value){ // A function assigned to variable 
    return '+' + value;
};
console.log(addPlusSign(200));

// ^ hoisting -> is the process of moving all the function and variable declarations to the top of the current scope before the code is run.
//Eg So can think of it before the code is executed. You can think of a step before that where it goes through and it looks for all your function declarations and your expressions and your variables and puts it all at the top of the page. Even though this happens, only funciton declarations are available before the code is executed.
