// ^ As we already know `constructor.prototype.callFunctionName(){}` alternate way to do this.

// * Object of prototype
const rectanglePrototype = {
    area: function () {
        return this.width * this.height;
    },
    perimeter: function(){
        return 2 * (this.width * this.height);
    },
    isSquare: function(){
        return this.height === this.width;
    }
}

// & When we want create rectangle object will use this function
function createRectangle(height, width){
    return Object.create(rectanglePrototype, {
        height: {
            value: height
        },
        width: {
            value: width
        },
    });
};

const rect = createRectangle(10, 20);
console.log(rect); // Here we didnt use constructor function so we wont be able to see it
console.log(rect.area());
console.log(rect.isSquare());

const rect2 = createRectangle(20, 20);
console.log(rect2.area());
 

// Object.create() => takes the members of an object of prototypes and then an object of your properties than you will able to use that.