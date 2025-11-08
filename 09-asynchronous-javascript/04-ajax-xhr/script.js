const xhr = new XMLHttpRequest(); // initialize an XMLHttpRequest object

// xhr.open('GET','./movies.json'); // 2nd parm, we want either the URL of the API we're fetching data from or the file.
xhr.open('GET','https://api.github.com/users/nilanshukumarsingh/repos');

// Creating an event handler for an event called on ready state change
xhr.onreadystatechange = function(){
    // Five different states that the readystate property
    /*
        - 0: request not initialized
        - 1: server connection established
        - 2: request received
        - 3: processing request
        - 4: request finished and response is ready
    */ 
//    console.log(this.readyState);

    // if you want the response is successful.
    // console.log(this.status);

    if(this.readyState === 4 && this.status === 200){
        // console.log(JSON.parse(this.responseText)); // Fetching the data from JSON
        
        const data = JSON.parse(this.responseText);

        // data.forEach(movie =>{
        //     const li = document.createElement('li');
        //     li.innerHTML = `<strong>${movie.title} ${movie.year}</strong>`

        //     document.querySelector('#results').appendChild(li);
        // })

        data.forEach((repo) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
            document.querySelector('#results').appendChild(li);
        })

        // You can verify using -> devTools->networ>Fetch/XHR/repos
    }
}

xhr.send(); // we have to send the requst to run onreadystatechange