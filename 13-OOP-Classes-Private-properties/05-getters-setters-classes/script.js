// Getters and Setters we can use with the classes, object literals , constructor functions

class Person{
    constructor(firstName, lastName){
        // _ -> signify that this is private property and you should'nt access it.
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // We use when we want to do something before it return.
    get firstName(){
        // return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
        return this.capitalizeFirst(this._firstName);
    }

    set firstName(value){
        this._firstName = this.capitalizeFirst(this._firstName);
    }

    get lastName(){
        return this.capitalizeFirst(this._lastName);
    }

    set lastName(value){
        this._lastName = this.capitalizeFirst(value);
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    capitalizeFirst(value){
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const person1 = new Person('Johm', 'Doe');
console.log(person1.firstName);
console.log(person1.lastName);

// setter 
person1.firstName = 'joe'
person1.lastName = 'smith'
console.log(person1);

console.log(person1.fullName);
