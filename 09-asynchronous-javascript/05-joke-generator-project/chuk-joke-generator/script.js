const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {

    jokeEl.innerHTML = "Loading..."; // Show loading message immediately

    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function(){

        if(this.readyState === 4){

            setTimeout(()=>{ // Wait 2 seconds before showing the joke

                if(this.status === 200){
                    //console.log(this.responseText); // this will give a string but it will look like an object. So we have to parse to see actual object
    
                    // console.log(JSON.parse(this.responseText).value);
    
                    jokeEl.innerHTML = JSON.parse(this.responseText).value;
                }else{
                    jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
                }

            },1000); // 2000 ms = 2 seconds
        }
    };

    xhr.send(); //
}

jokeBtn.addEventListener('click',generateJoke);

document.addEventListener('DOMContentLoaded', generateJoke);