# What is An algorithm?

INPUT    ---->     A set of rules to get an expected output from the input -----> OUTPUT 


# What is unit Testing?
A way of testing individual pieces of code called `units`.
1) Acceptance Testing
2) System Testing
3) Integration Testing
4) Unit Testing


> Simple Example
```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toEqual(3);
});
```

Now there's all kinds of testing, libraries and frameworks not just javascript but for any language.

So we'll be working with very popular framework called **jest**.


### HOW TO INSTALL JEST

npm init -y
npm i -D jest


in package.json

"scripts":{
    "test": "jest"
}

sum.js create it

npm run test


> How to test DOM Element using JEST
We're going to do is create a function called get elements by tag where we can pass in root element whether is div or ul or some kind of DOM element and then also pass in a tag name. And we want to return an array of all the tags within that root.

In order to use JEST we have to installed additional package where we can create mock elements to test because we have no DOM , because we are not dealing with HTML. This is pure javascript where we're just in NODE JS.
We're going to use `Jest Environment Package DOM`

 > npm i -D jest-environment-
 
 Now to use this -:
1) Create  `jest.config.js`
```js
const config = {
    testEnvironment: 'jsdom'
}
module.exports = config;
```
