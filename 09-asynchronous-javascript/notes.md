## 🔹 *Asynchronous JavaScript*

> Events are asynchronous.

JavaScript is synchronous and it's also what we call **single threaded**.

**What is synchronous?**  
I mean that everything happens one at a time, so each line of code is executed one at a time and the line before has to be done before the next one starts.

---

## 🔸 Single Thread Execution

- JavaScript is single-threaded language  
- Single sequential flow of control.  
- JavaScript is synchronous language with asynchronous capabilities.  
- A thread has a call stack and memory.  
- JavaScript doesn’t run multiple threads or processes at the same time — JavaScript doesn’t by default.  
- Threads also include the call stack and memory heap.  
- **Example**:
  - Operation 1: `console.log(1);`  
  - Operation 2: `console.log(2);`  
  - Operation 3: `console.log(3);`  
    > The second console log can only happen once the first is done.  
    > The third console can only happen once the second is executed.

---

## 🔹 How Async JavaScript Works

JavaScript is synchronous by default or at its core and it's single-threaded, so it runs on a single thread of execution. So, each operation is going to run and gets executed line by line.

The issue is: these operations take a while because we have to wait for one operation to finish before the next one can continue. So, if you're fetching data from a server or if you're in NodeJS and you're writing or reading to a file, those operations will take a while to execute — like milliseconds or seconds.

The operation takes a while and basically holds up the line — that's called **blocking code** or **blocking operation** and it blocks the flow of the program until it completes.  
**Non-blocking code** refers to code that does not block execution.

---

## ^ Blocking Code Example

```javascript
const fs = require('fs');

const filepath = 'text.txt';

// Reads a file in a synchronous and blocking way
const data = fs.readFileSync(filepath, {encoding: 'utf8'});

// Print the content of file
console.log(data);

// This section calculates the sum of numbers from 1 to 10
let sum = 0;
for(let i = 0; i <= 10; i++){
    sum = sum + i;
}

// Prints the sum
console.log('Sum: ',sum);
```

### 🏃 Output Example

```text
Hello from the text file!
Sum: 55
```

## ^ Non-Blocking Code Example
```javascript
const fs = require('fs');

const filepath = 'text.txt';

// Reads a file in a synchronous and non-blocking way
fs.readFile(filepath,{encoding: 'utf8'}, {err, data} => {
    // Prints the content of file
    console.log(data);
})

// This is section calculates the sum of numbers from 1 to 10
let sum = 0;
for(let i = 1; i <= 10 i++){
    sum = sum + i;
}

// Prints the sum
console.log('Sum: ', sum);
```

### 🏃 Output Example

```text
Sum: 55
Hello from the text file!
```

* The addition to that wherater we're in the browser or in NodeJS, we have this additional API's give the Asynchronous capabilities. So that's what we say javascript is synchronous but we can write asyncrhonous code with these APIs.  Example :- DOM API, setTimeout(), setInterval(), AJAX (XMLHttpRequest), fetch(). Well these are not part of core JavaScript languagem they're just available to us within our environment.




<!-- What is HTTP ?-->
HyperText Transfer Protocol is the protocol for sending and receiving data on the web.

HTTP is a client/server protocol. Requests are initiated by the client (you) and the server will respond with a "response"

The response could be HTML, CSS, JS files, images and other resources as well as data formated as JSON or XML.

<!-- Making Requests from javascript -->
Many times, you will want to fetch some data and update a specific part of the DOM/webpage. We can do this using javascript.

AJAX / XMLHttpRequest object was the original way of doing this, however, these days we mostly use the fetch API that is available to us in the browser environment.

<!-- HTTP Methods -->
 - GET Request            ->  Fetch/retrieve data from the server
 - POST Request           ->  Send data to the server
 - PUT & PATCH Request    ->   Updata data on a server
 - DELETE Request         ->   Delete data from a server


<!-- HTTP Status Codes -->
100 Range   Continue
200 Range   Success
300 Range   Redirects
400 Range   Client Error
500 Range   Server Error

 - 200 : Success
 - 201 : Created
 - 204 : No content
 - 301 : Resource Moved
 - 400 : Bad Request
 - 401 : Unauthorized
 - 403 : Forbidden
 - 404 : Not Found
 - 500 : Error on server


<!-- AJAX/XHR Object -->
A built-in browser object that allows us to make HTTP requests. We can make requests to servers without having the refresh the page. This allows us to make our webpages much more dynamic. 

These days, you will be using the fetch API over XHR, however, I think it is still important to know how to use.

Also AJAX stands for asynchronous javascript and XML. Now, this is becauuse years ago when this technology was created, XML was the common data format that we used for HTTP and this type of communication.These days you never see XML instead we work with JSON which is much clear.


<!-- How it works AJAX/XHR -->
    S       E        R         V        E         R
           /\ |                 / \  |   
            | |                  |   |   JSON or XML
            | |  XMLHttpRequest  |   |
            | |                  |  \ / 
 COMMON     | |                 AJAX ENGINE
 REQUEST    | |                 / \  |               
& RESPONSE  | |                  |   |  HTML Response
            | |     JS CALL      |   |  
            | |                  |   |
            | \/                 |  \ /
            C L I E N T (YOUR BROWSER)

When we go into web page and make a request and get a response,
