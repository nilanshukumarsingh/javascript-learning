let output;

output = document.all; // * It gives HTML all connections
output = document.all[10];
output = document.all.length;

//? If you want to get everything that's in the HTML element or tag
output = document.documentElement;

//? To get head and body only
output = document.head;
output = document.body;

//? To get only children
output = document.head.children;
output = document.body.children;

//? doc type
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// document.forms[0].id = 'new-id'; 

output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].href = 'https://facebook.com';
output = document.links[0].innerText = 'Facebook';
output = document.links[0].id = 'google-link';
output = document.links[0].className = 'google-class';
output = document.links[0].classList; // * Collection of class


output = document.images;
output = document.images[0];
output = document.images[0].src;

// * HTML collection is array like but  it is not actually an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);