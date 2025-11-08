console.log(window);

console.log(window.document); // Will show the just an element

console.dir(window.document); //  It will show with properties and values

console.log(document.body);

console.log(document.body.innerHTML); // It will show actuall element in body

console.log(document.body.innerText);

console.log(document.links[0]); // links are stored just like an array so to access we can access it using index

// document.body.innerHTML = "<h1>Hello World</h1>";

// Insert
// document.write('Hello from JS'); // It just bascially puts it at the end of the file

// console.log(document.getElementById('main'));
const main = document.getElementById('main');
main.innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hello';


