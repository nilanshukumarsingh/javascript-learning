// try{
//     console.log(x);
// } catch(error){
//     console.log('Error: ' + error);
// }

// If you're making an API request or an HTTP request and you're not sure if the request will succeed, you can use try catch to handle that error 

function double(number){
    if(isNaN(number)){
        throw new Error(number + ' is not a number');
    }

    return number*2;
}

try{
    const y = double('hello');
    console.log(y);
} catch (error){
    console.log(error);
}




