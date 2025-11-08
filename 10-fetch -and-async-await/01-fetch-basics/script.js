// ^ Fetch API & Async / Await

// Fetch API is more modern way to communicate with servers and make HTTP requests.
// - Types of requests using fetch API that is get , post , delete.

// Now, async await is newer syntax for working with not only the fetch API but any promises. Async await is now more common than .then()

// & Big difference between fetch and using old school AJAX is that fetch API returns a promise. We cam make request to APIs whether that is public one like twitter or github API or own backend server or we can access files that can make request and get the data from files such as this "movies.json" or text.txt file

/* window.fetch() -> it is applicable to window

Step1:- fetch('./movies.json') -> this basically returns a promise 

Step2 :-  fetch('./movies.json').then() -> to use promise

There is another method that is async await

In the .then() you might think well we are going to get data and do anything with data but it works little different with the fetch API. The first promise we get back is going to be a response object.

* return response.json(); -> whatever we return from first .then() that we're going to get as the next .then() argument.
*/

// fetch('./movies.json').then((response) =>{
//     //console.log(response); // ^ response object 

//     // ? How do we get the data with JSON?
//     return response.json();
// }).then((data) => {
//     console.log(data);
// })

//** There are other HTTP libraries that are seperate from the browser that you have to either install or include the CDN. Eg AXIOS best ->>>>>>   axios.get().then();


// ? Fetching a JSON File
// fetch('./movies.json').then((response) => response.json()).then((data) => console.log(data));

// ? Fetching a text file
// fetch('./test.txt')
//    .then((response) => response.text())
//    .then((data) => console.log(data));


// ? Fetching from an API
fetch("https://api.github.com/users/nilanshukumarsingh/repos")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        document.querySelector('h1').textContent = data.login;
    });