const socials = ['Twitter', 'LinkedIn','Facebook','Instagram'];

console.log(socials.__proto__);

//* forEach(Callback function or Anonymous function)
// socials.forEach(function (item){
//    console.log(item); 
// });

socials.forEach((item) => console.log(item));

// ^ element -> The current element being processed in the array
// ^ index -> The index of the current element being processed in the array
// ^ array -> The array forEach() was called upon

socials.forEach((item,index,arr) => console.log(`${index} - ${item}`,arr));

// & You can also passed named function as well as anonymous function
function logSocails(social){
    console.log(social);
}
socials.forEach(logSocails);


const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com'},
    { name: 'Facebook', url: 'https://facebook.com'},
    { name: 'Linkedin', url: 'https://linkedin.com'},
    { name: 'Instagram', url: 'https://instagram.com'},
];
socialObjs.forEach((item) => console.log(item)); // it will give us objects

// If you want to access specific property than
socialObjs.forEach((item) => console.log(item.url));