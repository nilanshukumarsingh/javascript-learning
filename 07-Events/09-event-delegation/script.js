const listItems = document.querySelectorAll('li');

// listItems.forEach(item =>{
//     item.addEventListener('click',(e)=>{
//         // console.log(e.target);
//         e.target.remove(); // it will remove every item we click
//     })
// })

// Event delegation -: add just a single event listener onto the parent and then target whichever one we want to delete.
const list = document.querySelector('ul');
list.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});

list.addEventListener('mouseover',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.style.color = 'red';
    }
});



