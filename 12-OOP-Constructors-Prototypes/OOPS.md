## What is OOP
OOP/Object Oriented Programming is a programming paradigm or a way of thinking about and structuring code. It is a specific style to immplement certain principles.
There are other paradigms such as procedural, functional and logic. OOP is extremly common in many different languages.
In object oriented programming, we write objects that contain both data and function or methods and we interact with those objects to perform actions.


## What is an Object
'Self-contained' piece of code that is a collection of methods and properties.A properties is in assosciating between a name or a key and a value. Objects are used as building blocks and can interact with one another.
There are many ways to create objects in JS. we have object literals, constructor functions, classes, factories, and more.
We have worked with many objects already. We have even created some using the object literal syntax.
Eg-: Built in math object,date object in fact everything javascript is look like an object. Even primitive data types like strings and number, they are not technically an objects, they're primitives but they are treated like objects when we use certain methods. Let's say we use toUppercase() method. So what happens is javascript will actually create a temporary object behind a scenes and that called wrapper object


Examples of common objects -: Any entity in your application could be an object.
- User  - Post  - Comment  - UI Component  - Product  - Order  - Cart  - Customer  - Employee  - Message  -Book  - Item


## Why Use OOP?
- Can make your code easier to read and understand
- Prevents spaghetti code
- Flexible and allowes you to build complex applications
- NOT always needed. OOP can be overkill for smaller projects. It's great for more complex projectsm especially if working on a team.


## Components of OOP
- **Constructor Functions (JS)** : Creates a blueprint for an object.
- **Prototypes(JS)** : A way for objects to inherit properties and methods from one another.
- **Classes** : Another way to create a blueprint. "Syntactic Sugar" in JS, but part of many other languages.
- **Instances** : Objects are "instantiated" using the blueprint (Constructor or Classes) 


```js
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    createProfile(){
        //...
    }

    logout(){
        //...
    }
}

const user1 = new User('Brad', 'brad@gmail.com');
user1.createProfile();

const user2 = new User('John', 'john@gmail.com');
user2.createProfile();

```

# 4 Principles of OOP

## 1. ABSTRACTION
Hiding all but the relevant parts of an object in order to reduce complexity and increase efficiency.

We have already seen abstraction many times in this course. When we use fetch() or we create an event listener with addEventListener(). We have no clue how it works. We only know about the methods and parts that are relevant to what we're doing.

## 2. ENCAPSULATION
The process of wrapping up data and methods into a unit such asa class or a function. Encapsulation usually includes some kind of "data hiding".

```js
class Circle{
    #radius;
    constructor(value){
        this.radius = value;
    }
    get area(){
        returm Math.PI * Math.pow(this.#radius,2);
    }
}
```

## 3. INHERITANCE
The process of inheriting the properties and methods from a parent class or constructor.

```js
class User{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Admin extends User{
    deleteUser(user){
        users = users.filter((u) => u.name !== user.name);
    }
}
```

## 4. POLYMORPHISM
The process of inheriting the properties and methods from  a parent calss or constructor. This is way to reuse code. Eg When we use the same method or same method name for different types of objects.
```js
class User{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Admin extends User{
    sayHello(){
        console.log(`Hello, my name is ${this.name}. I am a admin.`);
    }
}
```


