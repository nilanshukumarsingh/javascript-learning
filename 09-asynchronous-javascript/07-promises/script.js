// --------------- Promises ---------------------------
// A promise is an object that represents the eventual completion or the failure of an asynchronous operation.

// Promise to your script that it'll complete some kind of task of operation, such as fetching some data from server, some asynchronous opearation. Meanwhile, the rest of the code will continue to execute.So it is synchronous and non blocking.
// When the task is complete, the promise is either fulfilled or rejected and it also prevents us from entering callback hell.


// How do we create promise and promise constructor? 
// Here we given two params resolve and reject . So basically when the promise completes and it's successful, we call resolve when if there's some kind of error and the promise cant be fulfilled then we call reject.

// ^ Create a promise
const promise = new Promise((resolve,reject) =>{
    // ^ Do some async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    },1000);
});

// To handle the promise
promise.then(() => {
    console.log('Promise consumed..');
});

console.log('Hello from global scope'); // This is non blocking so it will be in first output

// & Method 2

new Promise((resolve,reject) =>{
    // ^ Do some async task
    setTimeout(() => {
        console.log('Async task 2 complete');
        resolve();
    },1000);
}).then(() => {
    console.log('Promise 2 consumed');
});


// ^ How to return data from promise ? 
// -> To do that we will put into resolve
new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve({name : 'John', age : 30});
    },1000);
}).then((user) =>{
    console.log(user)
})


// ^ How to handles error ? 
const getUser = new Promise((resolve,reject) => {
    setTimeout(() => {
        // let error = false; // We will get user as output
        let error = true; // it will give "Uncaught (in promise) Error: Something went wrong"
        if(!error){
            resolve({name : 'Jhon', age : 30});
        }else{
            reject('Error: Something went wrong');
        }
    },1000);
});

getUser.then((user)=>{console.log(user)}).catch((error) => console.log(error)).finally(() => console.log('The promise has been resolved or rejected'));

// Now you can put "finally" on promises. it will run no matter what whether the promise is resolved or rejected.