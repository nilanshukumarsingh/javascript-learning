const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speed-up');
const slowDown = document.getElementById('slow-down');
const speed = document.getElementById('speed-display');
const direction = document.getElementById('direction-display');

const rollAnimation = [{
        transform: 'rotate(0) translate3D(-50%, -50%, 0)',
        color: 'white'
    },
    {
        color: 'blue',
        offset: 0.3
    },
    {
        transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
        color: 'white'
}];


const rollOptions = {
    duration: 3000,
    iterations: Infinity,
};

const roll = ball.animate(rollAnimation, rollOptions);
let isReversed = false;

play.addEventListener('click', () => {
    roll.playbackRate = 1; // Play wasnt working after it reverse so. It will reverse as many times it moves forward    
    isReversed = false;
    roll.play();
    updateDisplays();
});

pause.addEventListener('click', () => roll.pause());

reverse.addEventListener('click', () => {
    roll.reverse();
    isReversed = !isReversed;
    updateDisplays();
});


speedUp.addEventListener('click', () => {
    roll.playbackRate = roll.playbackRate * 2
    updateDisplays();
});

slowDown.addEventListener('click', () => {
    roll.playbackRate = roll.playbackRate * 0.5
    updateDisplays();
});

function updateSpeedDisplay(){
   speed.textContent = Math.abs(roll.playbackRate).toFixed(2) + 'x';
}

function updateDirectionDisplay(){
    direction.textContent = isReversed ? 'Reverse' : 'Forward';
}

function updateDisplays(){
    updateSpeedDisplay();
    updateDirectionDisplay();
}