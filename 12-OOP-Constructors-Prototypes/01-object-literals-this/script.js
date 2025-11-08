// Object Literals -: We can have function in object literals
//-> If you want to access name,width,height properties within the function in area properties.. we have to use `this` keywords
const rectangle = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
    area: function(){
        return this.width * this.height;
    },
};

console.log(rectangle.name);
console.log(rectangle.area());

// console.log(this); // It give window object

const rectangle2 = {
    name: 'Rectangle 2',
    width: 30,
    height: 20,
    area: function(){
        return this.width * this.height;
    },
};

// Drawback of Object Literals :- You can only use it when you're using single instances or single objects. So if i want to create another rectangle than i have to create entire thing again. So if it was 100 rectangle than we have to create 100 times object literals that we not gonna do so there comes constructor.