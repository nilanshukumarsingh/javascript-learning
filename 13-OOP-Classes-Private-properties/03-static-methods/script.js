// static-methods -> It is methods that is available on the class itself rather than instance of the class which we have to call ourselfs. So what static methods is a method that we call directly on class
class Rectangle{
    constructor(name, height, width){
        this.name = name;
        this.height = height
        this.width = width;
    }

    area(){
        return this.height * this.width;
    }

    static getClass(){
        return 'Rectangle';
    }
}

const rect = new Rectangle('Rect', 10, 10);
console.log(rect.area());

// console.log(rect.getClass()); // Error as this is not a function after put static we can use class itself

console.log(Rectangle.getClass());