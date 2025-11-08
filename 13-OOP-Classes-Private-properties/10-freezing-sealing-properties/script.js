// Sealing - Prevents properties from being added or removed. Can still be changed

// Freezing - Prevents properties from being added, removed or changed.


const rectObj = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
}

let descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors); // By default it will be all true


//^ seal -> It will set configurable to false in all property
Object.seal(rectObj);
descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors);

// So we cant add or remove but we can change
rectObj.color = 'red'; // & Didnt added
delete rectObj.name; // & Didnt deleted

rectObj.width = 20; // & changed the value

console.log(descriptors);


// ^ freeze -> It will set configurable to false and writable to false in all property
const circleObj = {
    name: 'Circle 1',
    radius: 30
}

Object.freeze(circleObj);
descriptors = Object.getOwnPropertyDescriptors(circleObj);

circleObj.color = 'blue'; // & Didnt added
delete circleObj.name; // & Didnt deleted
circleObj.name = 'new Name'; // & Didnt change also

console.log(descriptors);


// So if we `freeze` an object it is also sealed and freeze..... So circleObj is both
// ^ isSealed()
console.log('rectObj is sealed?', Object.isSealed(rectObj));
console.log('circleObj is frozen?', Object.isSealed(circleObj));

// ^ isFrozen()
console.log('rectObj is frozen?', Object.isFrozen(rectObj));
console.log('circleObj is sealed?', Object.isFrozen(circleObj));



