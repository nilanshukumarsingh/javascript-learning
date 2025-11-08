// * setInterval -: it will repeatedly call a function or execute a code fix time delay between each call. And we can define the delay that we want.

// & clearInterval :- which will stop the interval from running


// const intervalID = setInterval((myCallback), 1000,'hello');
// function myCallback(a){
//     console.log(a,Date.now());
// }


// So we are doing to do a task when we click on button the background will change every seconds.

let intervalID;

function startChange(){
    if(!intervalID){
        //  intervalID = setInterval(changeColor,1000);
         intervalID = setInterval(changeRandomColor,1000);
    }
}

// function changeColor(){
//     if(document.body.style.backgroundColor !== 'black'){
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     }else{
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// }

function stopChange(){
    clearInterval(intervalID);
}



// Another task is to generate random hex color 
function changeRandomColor(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    
}

document.getElementById('start').addEventListener('click',startChange);
document.getElementById('stop').addEventListener('click',stopChange);