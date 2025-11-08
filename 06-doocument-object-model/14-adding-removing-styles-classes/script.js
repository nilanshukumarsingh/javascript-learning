const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run(){
    /*
    // className
    console.log(itemList.className);
    // text.className = 'dark'; // Proble it will change existing className to new className
    text.className = 'card dark'; // so make sure add the existing className
    */

    // ? classList
    // Better way using class list object which has different methods you can use on it too add and remove classes or even toggle classes.
    console.log(itemList.classList); //We will get DOMTOKENLIST

    itemList.classList.forEach((c) => console.log(c));
    
    text.classList.add('dark');
    text.classList.remove('card');


    text.classList.toggle('dark'); // it will add and when we click again it will remove
    text.classList.toggle('hidden');

    text.classList.replace('card','dark');

    // Change style
    itemList.style.lineHeight = '3';

    // change this all
    items.forEach((item,index) => {
        item.style.color = 'red';

        if(index === 2){
            item.style.color = 'blue';
        }
    })
}


document.querySelector('button').onclick = run;
