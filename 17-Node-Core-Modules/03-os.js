// Operating System Module
// It gives the information about the operating system the platform, the user things like CPU, architecture. We mostly use this electron framework where you can build javascript desktop application or i can build desktop app with javascript and VS code is actually built on electron alone with a lot of other things like slack the Postman HTTP client

const os = require('os');

//^ arch() => It will return a string identifying the operating system's CPU architecture. There are possible value of arm 64 IA 32 X 64 X 32 which is probably most popular.

console.log(os.arch());

//* platform()
// If it is say *Darwin* is Mac, if you're on a mac Pro or an Imac a Macbook whatever, then it 's going to be *Darwin* 
// If we are in windows it will be *win32*
// IF we are in linux it will be *linux*
console.log(os.platform());

if(os.platform() === 'win32'){
    console.log('You are on Win32')
}else if(os.platform() === 'darwin'){
    console.log('You are on windows');
}else{
    console.log('You are on linux')
}


//* cpus() -: It will return an array of objects containing information about each logical CPU core
console.log(os.cpus());

//* freemem() =: It'll show the amount of free memory of your system.
console.log(os.freemem());
console.log(`Free memory: ${os.freemem() / 1024 / 1024/ 1024} GB`);

//* totalmem() 
console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

//* homedir()
console.log(os.homedir());

//* uptime() -: current time of local machine
console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const mins = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(`Uptime: ${days} days, ${hours} hours, ${mins} minutes, ${seconds} seconds`);


//* hostname() 
console.log(os.hostname());
