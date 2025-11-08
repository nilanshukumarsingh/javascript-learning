let result;
for(let i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 === 0){
        result = 'FizzBuzz';
        console.log(result);
    }
    else if(i % 3 === 0){
        result = 'Fizz';  
        console.log(result);
    }else if(i % 5 === 0){
        result = 'Buzz';
        console.log(result);
    }else{
        result = i;
        console.log(result);
    }
}