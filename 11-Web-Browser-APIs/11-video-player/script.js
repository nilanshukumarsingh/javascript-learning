const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function playPause(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

function updateIcon(){
    if(video.paused){
        play.innerHTML = '<i class = "fa fa-play fa-2x"></i>';
    }else{
        play.innerHTML = '<i class = "fa fa-pause fa-2x"></i>';
    }
}

function updateProgress(){
    // here is different because in audio player progress bar was a div, we had a progress container and then progress div within it and we set the width to that div with this. This is an actual input that is range input 
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minute
    let minutes = Math.floor(video.currentTime / 60);
    // Now by default it wont have 0 at the beginning 1 - 9
    if(minutes < 10){
        minutes = '0' + String(minutes);
    }

    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10){
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;

}

function setProgress(){
    // we want a number that we use `+` or we could use parse int because progress value is in string
    video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click', playPause);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
progress.addEventListener('click', setProgress);
