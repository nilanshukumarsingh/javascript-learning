function capitalizeWords(str){
    return str.toLowerCase()
              .split(' ')
              .map((word) => word[0].toUpperCase() + word.substr(1))
              .join(' ');
}

function makeMoney(amount){
    return `$${amount}`;
}


//^ Just export only one
// export default capitalizeWords;


//^ Just export more than use in object
export {
    capitalizeWords,
    makeMoney
}
