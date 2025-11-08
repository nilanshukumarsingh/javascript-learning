// * There are basically two methods "remove" & "removeChild"
/*
 ? remove -> is going to be called on the element you want to remove 
 & removeChild -> is called on the parent element and then you pass in the item you want to remove. 
*/

function removeClearButton(){
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

function removeItem(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}

function removeItem2(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];
    ul.removeChild(li);
}

function removeItem3(itemNumber){
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();

// removeClearButton();
// removeFirstItem();
// removeItem(2);
removeItem2(2);
removeItem3(1);
removeItem4(2);