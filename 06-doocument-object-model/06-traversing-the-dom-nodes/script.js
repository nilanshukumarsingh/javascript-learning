let output;
// DOM Nodes types => w3schools
const parent = document.querySelector('.parent');

output = parent.childNodes;
// so first you will see a text the "whitespace" is count in text
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

// So we are doing that we are accessing all of the nodes not just some elements nodes

output = parent.childNodes[3].innerHTML = 'Child One';
output = parent.childNodes[5].style.color = 'red';

// * firstChild
output = parent.firstChild;

// * lastChild
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

// ? Getting parents node from the child
const child = document.querySelector('.child');
output = child.parentNode;
output = child.parentElement; // parent will always be same if its node or element

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// ? siblings
const secondItem = document.querySelector('.child:nth-child(2)');

// * nextSibling
output = secondItem.nextSibling.nextSibling;

// * previousSibling
output = secondItem.previousSibling;

console.log(output);