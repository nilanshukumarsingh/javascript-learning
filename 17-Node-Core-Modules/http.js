// HTTP module a module that allow us to create a server and listen for HTTP requests. It doesnt provide the features that are needed in producion environment, for eg it doesnt handle routing or sessions or static files. To create a production ready web server, you would use a framework like express.
// We can create full rest API with it. We can create full rest API module with htttp request but it would be much harder like more code.
/*
^ response.end() -> it will send the response and we can pass the  msg.

^ server.listen(5000) -> port number to make live

how to run? node http
Now in browser run `http://localhost:5000


In browser you can make get request but you cant make put, delete etc.
* We will use postMan
How to use?
! 1) Open post man and select get
! 2) than in input box -> http://localhost:5000
! 3) Send click

^ response.writeHead(200, {'content-type' : 'text/html'}); -: In order to parse we have to add in HTML headers that is called headers and content type value of text/HTML. For css `text/css`, for json `application/json`, `text/plaintext` it will show all response that we sending in web

*/
const http = require('http');
const fs = require('fs');

/*
const server = http.createServer((request, response) => {
    const url = request.url;
    // console.log(request.url);

    if(url === '/'){
        response.writeHead(200, {'content-type' : 'text/html'}); // It will parse in website the `welcome`  
        response.end('<h1>Welcome</h1>') // Usually we use to fetch the JSON data and use it in interface
    }else if(url === '/about'){
        response.writeHead(200, { 'content-type': 'text/html'});
        response.end('<h1>About</h1>');
    }else{
        response.writeHead(404, { 'content-type': 'text/html'});
        response.end('<h1>Page Not Found</h1>');
    }
    // response.end('Hello World');
});
*/

// File system module

const posts = [
    {id: 1, title: 'Post One', body: 'This is post 1'},
    {id: 2, title: 'Post Two', body: 'This is post 2'},
];

const server = http.createServer((request, response) => {
    const url = request.url;
    if(url === '/'){
        fs.readFile('index.html', (error, file) =>{
            if(error){
                response.writeHead(500, {'content-type':'text/html'});
                response.end('<h1>Sorry, we have a problem</h1>')
            }else{
                response.writeHead(200, { 'content-type' : 'text/html'});
                response.end(file);
            }
        });
    }else if(url === '/api/posts'){ // Creating an API
        response.writeHead(200, {'content-type' : 'application/json'});
        response.end(JSON.stringify({success: true, data: posts}));
    }else{
        response.writeHead(404, { 'content-type' : 'text/html'});
        response.end('<h1>Page Not Found</h1>');
    }
});

server.listen(5000, () =>{
    console.log('Server is listening on port 5000');
}); // for backend if u want to use 3000 for frontent u can