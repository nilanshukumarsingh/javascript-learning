function getData(endPoint){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.open('GET',endPoint);

        xhr.onreadystatechange = function(){
            if(this.readyState === 4){
                if(this.status === 200){
                    resolve(JSON.parse(this.responseText));
                }else{
                    reject('Something went wrong');
                }
            }
        }

        setTimeout(()=>{
            xhr.send();
        },Math.floor(Math.random() * 3000)+1000);
    });
}

const moviesPromise = getData('../10-promise-vs-callback-hell/movies.json');
const actorsPromise = getData('../10-promise-vs-callback-hell/actors.json');
const directorsPromise = getData('../10-promise-vs-callback-hell/directors.json');

// If we have any other promise we want to throw in promise.all we can...
const dummyPromise = new Promise((resolve,reject) =>{
    resolve('Hello World');
})


// Promise.all takes in array of promises.
Promise.all([moviesPromise,actorsPromise,directorsPromise,dummyPromise]).then((data) =>{
    console.log(data);
}).catch((error) => console.log(error));

// We can use callback, promise Chaining and their is third way to do this.
// Which is fetch the movies,actors,directors in specific order and that's using promise.all()