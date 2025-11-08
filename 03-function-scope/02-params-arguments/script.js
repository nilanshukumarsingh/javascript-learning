// Default paramaters
function registerUser(user = 'Bot'){

    // if(!user){
    //     user = 'Bot';
    // }

    return user + ' is registered';
}
console.log(registerUser()); // Undefined is registered
console.log(registerUser('John'));


// Rest Params
function sum(...numbers){
    let total = 0;
    for(const num of numbers){
        total += num;
    }
    return total;
    // return numbers; // It will return an array
}
console.log(sum(1,2,3));


// Objects as params
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
    id: 1,
    name: 'John',
};
console.log(loginUser(user)); 
console.log(
    loginUser({
        id: 2,
        name: 'Sara',
    })
);


// Arrays as params
// function getRandom(arr){
function getRandom(...arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

// getRandom([1, 2, 3, 4, 5, 6, 7, 8]);
getRandom(1, 2, 3, 4, 5, 6, 7, 8);