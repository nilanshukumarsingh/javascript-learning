function getData(endpoint, cb){
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            // console.log(JSON.parse(this.responseText));

            // * Change this callback
            cb(JSON.parse(this.responseText));
        }
    }


    // I want movies,director,actors and each time completely random the number of seconds 1 to 4 sec
    setTimeout(() =>{
        xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
}

// There's no defined order means it not going to necessarily give me the movies first and then the actors and then the directors.

/*
getData('./movies.json');
getData('./actors.json');
getData('./directors.json');
*/


// So if we want to make this data return in the order that we requested it, we can do that by passing in callback to get data. -> cb

getData('./movies.json', (data) =>{
    console.log(data);
    getData('./actors.json',(data) =>{
        console.log(data);
        getData('./directors.json',(data)=>{
            console.log(data);
        })
    })
});

// So when we refer to callback hell, it's just when you keep passing in callback wihin callback.

// Now if we have many callback it will look messy so that is why there is "promises" come