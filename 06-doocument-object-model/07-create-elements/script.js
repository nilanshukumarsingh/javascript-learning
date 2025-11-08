// ! Create and append Elements
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
// ? we can use setAttribute method
div.setAttribute('title','My Element');

// innerText is really meant to get and change the text of an already exisiting element So better way to create a new text node with the create text node method and than append to element

// div.innerText = 'Hello World';
const text = document.createTextNode('Hello World');
div.appendChild(text); // It append wheter it is text node

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);

// console.log(div);


