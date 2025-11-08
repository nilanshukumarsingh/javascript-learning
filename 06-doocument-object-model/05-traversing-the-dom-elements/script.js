let output;
//* Get Child Elements

const parent = document.querySelector('.parent');
output = parent.children;// HTMLCollection of all the children
output = parent.children[1]; //! you can see what else you can do by 'console.dir(output);
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

// we can change also
parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

// * firstElementChild property
parent.firstElementChild.innerText = 'Child One';

// * lastElementChild property
parent.lastElementChild.innerText = 'Child Three';

// ? Get parent elements from a child
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// ? Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
// ? nextElementSibling -> next node
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'green';

// ? previousElementSibling
output = secondItem.previousElementSibling;
secondItem.previousElementSibling.style.color = 'orange';

console.log(output);