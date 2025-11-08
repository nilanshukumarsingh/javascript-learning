// * Property Flags And Descriptors

// [[Configurable]] - if 'true', the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for..in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property




// Now the way that we can view the flags is with something called a descriptor and we can get own property descriptor.
// An eg where this property flag and descriptors are set to false. In math.pi

Math.PI = 4; // Because flag is set to false it wont change the value
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math,'PI');
console.log(descriptor);

const rectObj = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
}

descriptor = Object.getOwnPropertyDescriptor(rectObj,'name');
console.log(descriptor); // You will see configurable, enumerable and writable is set to true

// Now how do we change to false?

Object.defineProperty(rectObj, 'name',{
    writable: false,
    configurable: false,
    enumerable: false,
});
descriptor = Object.getOwnPropertyDescriptor(rectObj,'name');
console.log(descriptor);

// Now try to change
rectObj.name = 'New Name'; // flag is false we cant change
delete rectObj.name; // cant delete it
console.log(rectObj);


// & Enumerable does is
for(let [key, value] of Object.entries(rectObj)){
    console.log(`${key} : ${value}`);
}
// We wont see `name` as enumerable is set to false but if we set it to true we can see it.




// Now if you want to get the descriptors for all properties, then you can use the getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(rectObj));

