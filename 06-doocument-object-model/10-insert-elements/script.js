/* 
!<!-- beforebegin -->
<p>
    *<!-- afterbegin -->
    foo
    &<!-- beforeend -->
</p>
?<!-- afterend -->
*/


// insertAdjacentElement Example

function insertElement(){
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin',h1); 
}

// insertAdjacentText Example
function insertText(){
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('beforebegin','insertAdjacentElement');
}


// insertAdjacementHTML Example
function insertHTML(){
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('afterend','<h2>insertAdjacentHTML</h2>');
}
// insertBefore Example
/*
It is similar to appendChild. You do is you define a parent or you bring in a parent and then you choose the item inside that parent that you want to insert your item before
*/
function insertBeforeItem(){
    const ul = document.querySelector('ul'); // parent

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');
    ul.insertBefore(li, thirdItem);
}



insertElement();
insertText();
insertHTML();
insertBeforeItem();
