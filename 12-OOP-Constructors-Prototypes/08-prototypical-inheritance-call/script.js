// * Now we will able to do is to have other shapes that will inherit the is shape constructor not for just rectangle.

function Shape(name){
    this.name = name;
} 


// One of the use inheritance is to inherit the prototypes -> Protypical inheritance
Shape.prototype.logName = function () {
    console.log(`Shape Name: ${this.name}`)
}
// Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);

function Rectangle(name, height, width){
    
    // Shape(); // But we dont wanna do this because in shape we're saying `this.name` in regular function `this` pretains to the window object which obvisouly we dont want, we want object instances that uses the constructor function. and here we are not use 'new' also
    //* call() -> whatever the context of this which in case is object and pass the name also.
    // inherit the shape constructor
    Shape.call(this,name);

    this.width = width;
    this.height = height;
}

function Circle(name, radius){ 
    Shape.call(this, name);

    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);


// ^ Set prototype constructors
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;


const rect = new Rectangle('Rectangle 1', 20, 20);
console.log(rect);
const cir = new Circle('Circle 1',30);
console.log(cir)

rect.logName(); // We are able to use on rectangle object, which use the rectangle constructor which inherits from the shape and also inherits the prototypes
cir.logName();



console.log(rect.constructor); // Right now it will be set to shape but I want rectangle construcotr same for circle So just set the prototype constructor





// ^ How we can override prototype method ?
/*
So rn we have shope prototype on logName. So we want logName to do little different on a rectangle that would be good example of polymorphism
*/

Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.logName = function () {
    console.log(`Rectangle Name: ${this.name}`)
}

rect.logName(); // here you wouldnt see 
cir.logName(); // In circle u will see shape Name