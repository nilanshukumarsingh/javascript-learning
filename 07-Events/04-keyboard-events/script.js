// KeyBoard Events 

/*
    There are three main type of keyBoard Events

    1)key down -> now if we press any key and hold it on. So you will notice it fires off, but it keeps firing off as I'm holding it down until release and than it stops.

    2)key up -> Just hit a key and hold it and nothing happens yet. But when i release then that fies the key up event. 

    3)key press -> when you tap any key and it doesn't matter if you just tap if quickly or hold it down.It fires off that event just onc

*
*/

const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress');
}

const onKeyUp = (e) => {
    console.log('keyup')
};

const onKeyDown = (e) =>{
    // console.log('keydown');

    //** Properties

    // 1) key -> what we write in input field we will know in console
    console.log(e.key);
    document.querySelector('h1').innerText = e.key;

    if(e.key === 'Enter'){
        alert('You pressed enter');
    }

    // 2) keyCode -> it give actual number
        //******** */ https://www.toptal.com/developers/keycode/table
    if(e.keyCode === 13){
        alert('You pressed enter');
    }

    // 3) code -> it tell whjch key it is
    console.log(e.code);
    if(e.code === 'Digit1'){
        console.log('You pressed 1');
    }

    // repeat => it lets your script know if you're holding a key down or not. So if you tap the key, it's going to be false. If you hold the key down, then it's going to be true.

    if(e.repeat){
        console.log("You are holding down "+ e.key);
    }

    // to know shift, ctrl or alt
    console.log('Shift: ' + e.shiftKey);
    console.log('Control: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);

    if(e.shiftKey && e.key === 'K'){
        console.log('You hit shift + K');
    }
};

itemInput.addEventListener('keypress',onKeyPress);
itemInput.addEventListener('keyup',onKeyUp);
itemInput.addEventListener('keydown',onKeyDown);


