const logo = document.querySelector('img');


const onClick = () => console.log('click event');

const onDoubleClick = () => {
    if(document.body.style.backgroundColor !== 'purple'){
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};

const onRightClick = () => console.log('Right click event');

const onMouseDown = () => console.log('mouse down event');

const onMouseUp = () => console.log('mouse up event');

const onMouseWheel = () => console.log('mouse wheel event');

const onMouseOver = () => console.log('mouse over event');

const onMouseOut = () => console.log('mouse out event');

const onDragStart = () => console.log('Drag start event');

const onDrag = () => console.log('Drag event');

const onDragEnd = () => console.log('Drag end event');


// Event Listener
logo.addEventListener('click',onClick); //By default left click
logo.addEventListener('dblclick',onDoubleClick);
logo.addEventListener('contextmenu',onRightClick);
logo.addEventListener('mousedown',onMouseDown); // when you click the mouse and hold it leftmouse button when we let it go it was say clickevent
logo.addEventListener('mouseup',onMouseUp); // when we let it go we see mouse up event
logo.addEventListener('wheel',onMouseWheel);
logo.addEventListener('mouseover',onMouseOver); // when we go into logo that mouse over event fires off (just like hover)
logo.addEventListener('mouseout',onMouseOut); // when we point out it runs
logo.addEventListener('dragstart',onDragStart); // when we click and hold and move it (only fires once)
logo.addEventListener('drag',onDrag);//if you keep holding it and moving around than we can use drag event
logo.addEventListener('dragend',onDragEnd);