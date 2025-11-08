//* So HTML5 as audio element that we can use there is javascript audio API we can pause play timestamp

const audo = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});
volume.addEventListener('change', () => (audio.volume = volume.value));

