// * this -> so this keyword is dynamic and it changes depeneding on using it. If we are using to global scope it will pretain to window object. If we use it constructor function or a class then we can use it to acess properties and methods for that object. If we use it to event listener then it is going to poin to the element that the event was triggered on.

// Now because of this there are so many different situation where this means something different so javascript manually define what this keyword means. 
// These methods are => call , bind , apply


// call() -> used that when we did our prototypical inheritance when we had shape constructor function and then we had child constructor function that inherited it and we wanted to call the parent constructor we had to use 'call'

// bind() -> will allow us to set this value, this the value of this manually and it returns a new function where this value is bound to whatver the value is that we pass in.


class App{
    constructor(){
        this.serverName = 'localhost';

        // document.querySelector('button').addEventListener('click',this.getServerName); // this.getServerName as `undefined` because this in callback function which is just called as a regular function to fix this we will use bind

        document.querySelector('button').addEventListener('click', this.getServerName.bind(this));
    }

    getServerName(){
        console.log(this.serverName); //this will pretain to the current object
    }
}

const app = new App();

// app.getServerName(); // localhost

// & So whenever you have event listener and you want to call the class mehtod, if you're going to use this keyword in method like here `getServerName()` then you want to use bind