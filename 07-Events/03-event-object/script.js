const logo = document.querySelector('img');


function onClick(e){
    // console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    // e.target.style.backgroundColor = 'black';

    console.log(e.type);
    console.log(e.timeStamp);

    // These wil tell the coordinates
    console.log(e.clientX); //x-axis will be always be a horziontal Its from right to left 
    console.log(e.clientY); // Its from top to bottom 

    console.log(e.offsetX);
    console.log(e.offsetY);

    console.log(e.pageX);
    console.log(e.pageY);

    console.log(e.screenX);
    console.log(e.screenY);
}


// function that we pass in can take an optional event object (e or event or evt or anything)

// anonymous function
// logo.addEventListener('click',function(e){
//     console.log(e);
// });

logo.addEventListener('click',onClick);


// ?? So waht is event? 
// ** If I click on the list 'li' item that event bubbles up to the parent which would be 'ul' and the bubbles up to that parent and that parent all the way up to the body up to the HTML

document.body.addEventListener('click',function (e){
    console.log(e.target); // we click on li so it will show that
    console.log(e.currentTarget); // event is put on the body
})    


//***** Prevent default -> what it does is it stops the prevent default of the behaviour and with a form if your dealing with frontend js for validation or maybe you're making a fetch request or whatever and you don't want the form to actually submit to the page then you would use prevent default.
document.querySelector('a').addEventListener('click',function(e){
    e.preventDefault();
    console.log('Link was clicked');
});    


function onDrag(e){
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('drag',onDrag);

/*
- 'target' - The element that triggered the event
- 'currentTarget' - The element that the event listener is attached to (These are the same in the case)
- 'type' - The type of event that was triggered
- 'timeStamp' - The time that the event was triggered
- 'clientX' - The x position of the mouse click relative to the window
- 'clientY' - The y position of the mouse click relative to the window
- 'offsetX' - The x position of the mouse click relative to the element
- 'offsetY' - The y position of the mouse click relative to the element
- 'pageX' - The x position of the mouse click relative to the page
- 'pageY' - The y position of the mouse click relative to the page
- 'screenX' - The x positin of the mouse click relative to the screen
- 'screenY' - The y position of the mouse click relative to the screen
*/