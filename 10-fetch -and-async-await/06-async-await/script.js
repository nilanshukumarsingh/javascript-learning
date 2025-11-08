// Alternate way to consume promises instead of .then() syntax and this is called async await and await.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'John',age: 20});
    },1000);
})
// promise.then((data) => console.log(data));

// So when it comes to async await,function that is asynchronous
// ^ TO make it asynchronous we add 'async'
async function getPromise() {
    const response = await promise; // ^ Use Await here because this is asynchronous operation, so we have to await to be completed.

    console.log(response);
}

getPromise();


// We can use async await in fetch API , with fetch we get two promise, one with response object and then we return the response JSON method and we get data...

// function getUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data));
// }

// & Using async-await in fetch
async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users') // We usually put `.then()` after this but we dont have to because we're awaiting on that request.

    const data  = await res.json();

    console.log(data);
}

// getUsers();

// Lets use for Arrow funciton
const getPosts = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    console.log(data);
}

getPosts();
