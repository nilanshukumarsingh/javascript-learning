function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');
    const li = document.createElement('li');
    // li.innerText = 'Replaced First';
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)');
    
    secondItem.outerHTML = '<li>Replaced Second</li>'
}

// To replace all the elements
function replaceAllItems(){
    const lis = document.querySelectorAll('li');
    /*
    lis.forEach((item, index)=>{
        // item.outerHTML = '<li>Replace All</li>';
        if(index === 1){
            item.innerHTML = 'Second Item';
        }else{
            item.innerHTML = 'Replace All'; 
        }
    }); 
    */

    // We can use implicit return no need for currly braces
    lis.forEach((item,index) => item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>');
}

// Now another way of replacing something is by selecting the parent element and then using method replaceChild
// h1 will be change to h2 (how we do ? first select parent than select the item which we wanna replace)
function replaceChildHeading(){
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';
    header.replaceChild(h2,h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
