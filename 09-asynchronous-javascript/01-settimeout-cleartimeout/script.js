setTimeout(function (){
    console.log('Hello from callback');
},0);

console.log('Hello from global scope'); //this runs first because setTimeout function gets put onto the task queue and waits for the call stack to clear before it's run.

// setTimeout(changeText,2000);
function changeText(){
    document.querySelector('h1').textContent = 'Hello from callback';
}

// clearTimeout -> in order to do that we need to have the time ID that set timeout returns.

const timerId = setTimeout(changeText,3000); // after 3 second text will get change

// To cancel the clearTimeout 
document.querySelector('#cancel').addEventListener('click',() =>{
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cacelled');
})




