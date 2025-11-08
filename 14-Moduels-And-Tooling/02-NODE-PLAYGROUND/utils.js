const message = {
    id: 1,
    text: 'Hello World',
};

// Now i want to do is access this messaeg object form App.js

// module.exports = message; // Using common js



// ^ Direct
/*
module.exports = {
    id: 1,
    text: 'Hello World',
};
*/

function capitalizeWords(str){
    return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.substr(1)).join(' ');
}
// module.exports = capitalizeWords;
// module.exports = {message, capitalizeWords};


function makeMoney(amount){
    return `$${amount}`;
}

// Now if you have multiple function that you want to export just put in object and in APP.js we will destructure it

module.exports = {
    message,
    capitalizeWords,
    makeMoney,
}