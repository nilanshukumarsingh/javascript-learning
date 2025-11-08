function Rectangle(name, width, height){
    this.name = name;
    this.width = width;
    this.height = height;
};

const rect = new Rectangle('Rect',10,10);

console.log(rect);


// ^ Now we can store methods in the prototype 
// ? Why we will put area function in prototype? Because when we create a new rectangle, we need to pass a name,width and height but the area will always going to stay the same.

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width * this.height);
}

Rectangle.prototype.isSquare = function () {
    return this.width === this.height;
}

Rectangle.prototype.changeName = function (newName) {
    return (this.name = newName);
}

console.log(rect.area()); // We will be able to see this in prototype  
console.log(rect.perimeter());
console.log(rect.isSquare());
rect.changeName('Test');
console.log(rect.name);


const rect2 = new Rectangle('Rect 2', 30, 40);
console.log(rect2.area());

// So any object that I instantiate from this constructor function, I have access to all of these prototype methods.