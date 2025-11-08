// PARENT CLASS
class Shape{
    constructor(name){
        this.name = name;
    }

    logName(){
        console.log('Shape Name: ' + this.name);
    }
}

// SUB CLASS
// inherit the class use `extends`
class Rectangle extends Shape{
    constructor(name, width, height){
        super(name); // It what does is it will constructor of the parent class

        this.width = width;
        this.height = height;  
    }
}

class Circle extends Shape{
    constructor(name, radius){
        super(name); // It what does is it will constructor of the parent class

        this.radius = radius; 
    }

    // We an override whatever he had methods in parent class
    logName(){
        console.log('Circle name: ' + this.name);
    }
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect);
rect.logName();

const cir = new Circle('Cir 1', 30);
cir.logName();

// rect is instance of rectangle but because we extended shape it's also an instance of shape.
console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);