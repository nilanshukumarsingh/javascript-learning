# JavaScript Learning Journey

This repository contains a comprehensive collection of JavaScript concepts, examples, and projects covering fundamental to advanced topics. Perfect for beginners to advanced developers looking to master JavaScript.

## 📚 Table of Contents

1. [Variables and Data Types](#variables-and-data-types)
2. [Arrays and Objects](#arrays-and-objects)
3. [Functions and Scope](#functions-and-scope)
4. [Logic and Control Flow](#logic-and-control-flow)
5. [Iteration and Array Methods](#iteration-and-array-methods)
6. [DOM Manipulation](#dom-manipulation)
7. [Events](#events)
8. [Projects](#projects)
9. [Asynchronous JavaScript](#asynchronous-javascript)
10. [Fetch API and Async/Await](#fetch-api-and-async-await)
11. [Web Browser APIs](#web-browser-apis)
12. [Object-Oriented Programming](#object-oriented-programming)
13. [Modules and Tooling](#modules-and-tooling)
14. [Iterators, Generators, and Data Structures](#iterators-generators-and-data-structures)
15. [Unit Testing and Algorithms](#unit-testing-and-algorithms)
16. [Node.js Core Modules](#nodejs-core-modules)

## 🎯 Key Features

- 📝 Detailed explanations with code examples
- 🎨 Interactive demos and projects
- 🔄 Practical exercises and challenges
- 🧪 Unit tests for algorithms
- 📱 Responsive web applications
- 🔧 Modern JavaScript tools and practices

## Variables and Data Types

### Basic Console Operations

```javascript
console.log("Hello World");
console.table({ name: "John", age: 30 });
console.time("Timer");
console.timeEnd("Timer");
```

### Data Types Overview

```javascript
// Primitive Types
const name = "John"; // String
const age = 30; // Number
const isAdmin = true; // Boolean
const nothing = null; // Null
let undefined; // Undefined
const symbol = Symbol(); // Symbol
const bigInt = 9007199254740991n; // BigInt

// Reference Types
const person = {
  // Object
  name: "John",
  age: 30,
};
const numbers = [1, 2, 3]; // Array
const date = new Date(); // Date
```

### Key Concepts

- Variables declaration and scope (var, let, const)
- Data types and type conversion
- Stack vs Heap memory allocation
- Operators and type coercion
- String manipulation and template literals
- Numbers and Math object methods
- Modern Date and Time handling

## Arrays and Objects

- Array basics and methods
- Nesting, concatenation, and spread operator
- Object literals
- Object methods and properties
- Destructuring and naming conventions
- JSON data handling

## Functions and Scope

### Different Function Types

```javascript
// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const multiply = function (a, b) {
  return a * b;
};

// Arrow Function
const divide = (a, b) => a / b;

// Method in Object
const calculator = {
  subtract(a, b) {
    return a - b;
  },
};
```

### Scope and Context

- Global scope vs Function scope
- Block scope with let and const
- Lexical scope and closures
- this context and binding
- Arrow functions and this
- Execution context and call stack
- Function hoisting and TDZ

## Logic and Control Flow

- If statements and conditions
- Switch statements
- Calculator implementation
- Truthy and falsy values
- Logical operators and assignments
- Ternary operators

## Iteration and Array Methods

- For loops
- While and do-while loops
- FizzBuzz implementation
- ForEach, map, filter, reduce
- Array method challenges

## DOM Manipulation

- DOM selectors and properties
- Traversing the DOM
- Creating and modifying elements
- Styling and class manipulation
- Shopping list implementation

## Events

- Event listeners
- Mouse and keyboard events
- Event object handling
- Form events
- Event bubbling and delegation
- Window events

## Projects

- Shopping List Application
- Other mini-projects throughout sections

## Asynchronous JavaScript

- setTimeout and setInterval
- Callbacks
- Promises
- Async/Await
- Error handling
- Multiple promises handling

## Web Browser APIs

- Geolocation API
- Canvas
- Audio API
- Video Player
- Text-to-Speech
- Animation implementations

## Object-Oriented Programming

- Constructor functions
- Prototypes and inheritance
- ES6 Classes
- Private properties
- Static methods
- Property flags and descriptors

## Modules and Tooling

- NPM package manager
- Node.js modules
- ES Modules
- Module bundlers
- Webpack basics

## Iterators, Generators, and Data Structures

- Symbols
- Iterators and Generators
- Sets and Maps
- Stacks and Queues
- Linked Lists

## Unit Testing and Algorithms

- Jest testing framework
- Common algorithm implementations
- Test-driven development practices

## Node.js Core Modules

- File System (fs)
- Path
- Operating System (os)
- URL and QueryString
- HTTP module

## 🚀 Getting Started

1. Clone this repository

```bash
git clone https://github.com/yourusername/javascript-learning.git
```

2. Navigate to project directory

```bash
cd javascript-learning
```

3. Install dependencies (for sections requiring npm)

```bash
npm install
```

4. Open `index.html` files in your browser or use Live Server

## 🛠️ Prerequisites

- Basic understanding of HTML and CSS
- Modern web browser
- Text editor (VS Code recommended)
- Node.js (v14+ recommended)
- npm (comes with Node.js)

## 📦 Development Setup

### VS Code Extensions Recommended

- Live Server
- JavaScript (ES6) code snippets
- ESLint
- Prettier
- Debug for Chrome

### Code Quality Tools

- ESLint for code linting
- Prettier for code formatting
- Jest for unit testing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes

```bash
git commit -m 'Add some AmazingFeature'
```

4. Push to the branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- MDN Web Docs
- JavaScript.info
- Modern JavaScript Tutorial
- Various open source contributors

## 📫 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/javascript-learning](https://github.com/yourusername/javascript-learning)

---

⭐️ Star this repository if you find it helpful!
