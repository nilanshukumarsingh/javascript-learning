function Rectangle(name, width, height){
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function(){
        return this.width*this.height;
    };
};

const rect = new Rectangle('Rect',10,10);
console.log(rect);

//^ A prototype is a special object where additional methods and properties can be attached and shared across all instances of its constructor function.
// * Since prototype is an object you will see one more prototype that what is prototype chain.


console.log(rect.toString());
// How this works? First it loks for two string directly in the object. So it will looks for property called toString. Than it looks in our object in our rectangle prototype if it's not there than it will look in object prototype if it is there than it will use it.


/*
[] => It has an array prototype
{} => It will object literal prototype
new String('') => string constructor will have string protoype
*/

console.log(Object.getPrototypeOf(rect));