// ^ With try catch inside a function 
const getUsers = async () => {
    try{
        // const response = await fetch('https://jsonplaceholder.typicode.come/users');

        // Error handling with the fetch API and error doesn't get thrown automatically if we hit a status like 404 and 500.
        const response = await fetch('https://mock.httpstatus.io/404');

        // ^ Normally we don't want our code to run if we catch an error 
        if(!response.ok){
            throw new Error('Request Failed');
        }
        const data = await response.text(); // for mock

        // const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};

// getUsers();


const getPosts = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
        if(!response.ok){
            throw new Error('Request Failed');
        }
        const data = await response.json();
    
        console.log(data);

    }catch(error){
        console.log(error);
    }
}

// getPosts();

// ^ No try catch inside a function and handling catch outside the function
// Other way to use try catch
const getNewUsers = async () => {
    const response = await fetch('https://mock.httpstatus.io/500');

    if(!response.ok){
        throw new Error('Request Failed');
    }

    const data = await response.text()
    console.log(data);
}

getNewUsers().catch((error) => console.log(error));

