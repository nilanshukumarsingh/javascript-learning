// & Event Bubbling 
/*
With bubbling the event is first captured and handled by the innermost element and then propagated to outer elements.
                                        ^
                Document                |

                HTML                    |

                Body                    |  Event Bubbling   

                Div                     |

                Button (click)          |

                    Event Target
            
*/

const button = document.querySelector('form button');

// If u clicked on rigth side of button(margin) it will say only 'Div was clicked' but when we click on button it will say 'Button clicked' than 'Div clicked';
// It means when we clicked it is firing off this clicked event and this is bubbling up and then any of its parents that have a click event listener, its going to fire that as well.
const div = document.querySelector('form div:nth-of-type(3)');

const form = document.querySelector('form');

button.addEventListener('click', (e)=>{
    alert('Button wes clicked');
    e.stopPropagation(); // Nothing will happens after that...
})

div.addEventListener('click', ()=>{
    alert('Div was clicked');
})

form.addEventListener('click',() =>{
    alert('Form was clicked');
})


document.body.addEventListener('click',()=>{
    alert('Body was clicked');
})

document.documentElement.addEventListener('click',()=>{
    alert('HTML was clicked');
})

document.addEventListener('click',()=>{
    alert('Document was clicked');
})

//* we click the button and that events is going to bubble up through all of its parents and anything that has a click event on it that will also get fired off.

// ? Now there are some cases when you don't want it fire off so that is where the propagation method comes in and that's part of the event object.

// ? So when do we call stopPropogation() -: For instance if we actually had a parent and child with that the same event listener 

// & e.stopImmediatePropagation() and this is used if you have multiple handlers on a single event and you want to stop the event for all of them.