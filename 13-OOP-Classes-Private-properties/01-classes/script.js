class Rectangle{
    // ^ This constructor will always going to run whenever you intiante
    constructor(){
        console.log('Run');
    }

    constructor(name, width, height){
        this.name = name;
        this.width = width;
        this.height = height;
    }

    // if we wantt to use function dont write function it will give error. All the methods will be in prototype
    area(){
        return this.height * this.width;
    }

    perimeter(){
        return 2 * (this.width * this.height);
    }

    isSquare(){
        return this.width === this.height;
    }

    //Using methods that are internal to the class that methods which you dont want user to know that is what abstraction is you dont know what is inner components is 
    logArea(){
        console.log('Rectangle Area: ' + this.area());
    }
}

const square = new Rectangle('Square',20,20);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
console.log(square);

square.logArea();
// console.log(Object.getPrototypeOf(square));