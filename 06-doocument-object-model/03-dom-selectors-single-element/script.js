// document.getElementById()

const element = document.getElementsByTagName('h1');

//* How to set id in element?
element[0].setAttribute("id","app-title");
element[0].id = "app-title";

//* 
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));


//* Set Attribute
// document.getElementById('app-title').id = 'new-id';
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class','title');

//* getElementById() -: When we grab the element from the DOM
const title = document.getElementById('app-title');
// console.log(title); // It will give the element

//? Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '5px';
title.style.borderRadius = '10px';


// document.querySelector()
console.log(document.querySelector('h1')); // It only select single element
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = "Apple Juice";
secondItem.style.color = 'red';

// * Use these methods on other eleemnts
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';