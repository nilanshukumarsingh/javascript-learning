// https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame

// Window.requestAnimationFrame() - You requests that the browser call a specific function to update an animation before the next repaint. Repaint is each step in animation the browser or the screen is getting repainted. Argument take repaint

const image = document.querySelector('img');
let start;
let done = false;

function step(timestamp){
    // console.log(timestamp);
    
    if(start === undefined){
        start = timestamp;
    }

    const elapsed = timestamp - start; // times is passed

    if(elapsed > 5000){
        done = true;
    }

    if(done){
        return;
    }

    image.style.transform = `translateX(${elapsed / 20}px) rotate(${elapsed / 10}deg)`;
    // console.log(elapsed);

    requestAnimationFrame(step);  // How much time is passed since we call the frame
}
requestAnimationFrame(step);