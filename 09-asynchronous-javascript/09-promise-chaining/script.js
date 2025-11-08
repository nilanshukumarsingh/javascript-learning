// Promise chaining 
// ^ This is used when you have sequence of asynchronous tasks that you need to complete or if you have a promise that returns a value that you need to use in another promise.

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        // let error = false;
        let error = true;

        if(!error){
            resolve({name : 'John',age : 30});
        }else{
            reject('Error: Something went wrong');
        }
    },1000);
});

promise.then((user)=>{
    console.log(user);
    return user.name; // * whatever I return from .then(), I can actually access in another dot then.
})
.then((name)=>{ // when we return it going to this chain .then()
    console.log(name);
    return name.length;
})
.then((nameLength)=>{
    console.log(nameLength);
})
.catch((error) =>{
    console.log(error);
    return 123;
})
.then((x) => console.log('This will run no matter what',x));


// ^ When you change the `flag = true`, so what we get is the error. So since we rejected here none of these .then() that are before .catch() are going to run. It's automatically run the catch.

// ^ But if we write after .catch() than .then() will run no matters what.