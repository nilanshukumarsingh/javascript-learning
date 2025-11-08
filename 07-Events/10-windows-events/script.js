// ! When we put our script tag in head we are running javascript before the page is loaded and before the DOM is loaded. (Using 'onload' we can do it)

// window.onload = function(){
//     document.querySelector('h1').textContent = 'Hello World'; 
// }

// * onload :- we're waiting for the entire page to load and that includes resources like images.

// Method 2 -: We can use addEventListener and use 'load' event
// window.addEventListener('load',()=>{
//     document.querySelector('h1').textContent = 'My World';
// })

// Method 3 -: DOM Content loaded
// window.addEventListener('DOMContentLoaded',
//     ()=> (document.querySelector('h1').textContent = 'DOM World')
// );

// *** Difference between load and DOM content loaded ?
/*
load waits for the entire page to load, including all resources such as images.

DOM content loaded runs as soon as the DOM is parsed and loaded.
*/

// ^^^ We can check which one will be loaded first DOM or Page?
window.addEventListener('load',() => console.log('Page Loaded')); // second page will be loaded..

window.addEventListener('DOMContentLoaded', ()=> console.log('DOM Loaded'));   // Basically DOM loaded first


// But if i run console.log in global 
console.log('Run me'); // this will run before DOM and page

// This happened because we're not in any of these events where we're waiting for the page to be load, which fine when the script is down above the ending body tag. But if you have to access any DOM elements from the global scope you will get an error if the script tag is in head.


// ??? defer attribute -: It will defer the js code from running untill it can run until the page is or the DOM is loaded.
// document.querySelector('h1').innerText = 'Hello Defer';

// Resize Event
window.addEventListener('resize',() => {
    document.querySelector(
        'h1'
    ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
})


// Scroll event
// window.onscroll = function(){
//     console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
// }

window.addEventListener('scroll',() =>{
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    // Navigation Bar at the top
    if(window.scrollY > 70){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});


// Focus and Blur event
window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach(p =>{
        p.style.color = 'blue';
    })
})

// when u click outside of windows means not in page blur runn
window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p =>{
        p.style.color = 'black';
    })
})
