// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

// Web speech API there is two part speech recognition and speech synthesis.
//1)Speech recognition:- is basically speech to text


//**  Project is on about when we say color and background changes on that color

// Now there is webkit speech recognition because this might not available in some browser

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true; //At false, once it runs, it listens and then it stops // if it is true, it'll listen and then it'll keep listening

// Creating handler 
rec.onresult = function(e){
    // console.log(e.results);

    const acceptedColors = [
        'red',
        'blue',
        'green',
        'yellow',
        'pink',
        'brown',
        'purple',
        'orange',
        'black',
        'white',
    ];
    for(let i = e.resultIndex; i < e.results.length; i++){
        const script = e.results[i][0].transcript.toLowerCase().trim();
        // console.log(script);

        if(acceptedColors.includes(script)){
            document.body.style.backgroundColor = script;
        }else{
            alert('Please say a color');
        }
    }
}

rec.start(); // request to your microphone access
// red dot means browser is listening through microphone or camera

