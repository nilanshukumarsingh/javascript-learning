const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkBox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e){
    console.log(e.target.value);

    heading.textContent = e.target.value;
}

itemInput.addEventListener('input', onInput);
// itemInput.addEventListener('keydown', onInput);
/*
keydown -> it will fire off everytime we enter any key
we can use keydown but we can use `input` event 
*/



//If we are going to select anything it going to fire this input event so whatever value we have given in `option` it will fire that.... we can use `change` event too it will work same
priorityInput.addEventListener('input',onInput);
// priorityInput.addEventListener('change',onInput);




//** checkbox work different -> e.target.checked
function onChecked(e){
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

checkBox.addEventListener('input',onChecked);


// *** Two more events that is `focus and blur` which has to do with clicking in and activating the input and clicking out of it and unactivating.
/*
focus -> so clicking in it is going to be focus
blur -> clicking outside will be blur
*/

// usually used for putting outline

function onFocus(e){
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';

}

function onBlur(e){
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('focus',onFocus);
itemInput.addEventListener('blur',onBlur);