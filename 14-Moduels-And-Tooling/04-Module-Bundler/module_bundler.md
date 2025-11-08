## What is a Module Bundler?
A module bundler is a tool that takes all of your source code, which is usually multiple files and bundles them together, often times, into a single build file.


    webpack          Snowpack         Parcel          Vite


## How it works?
We have sources files folder where we run that through webpack and we end up with just single bundle.js or main.js. It's usally in a folder called Dist or build and that what is included in the HTML and loaded in the browser.

All our codes, all our modules and everything, our NPM modules. It's all bundled together because of webpack. It basically runs through this process.

we will have Webpack.config.js and there is where you can specify your input javascript which is in this case would be **app.js** our output file will be **bundle.js**.


Now webpacks as some loaders. 
> What is Loaders? 
Loaders are used to process different types of files and convert them into modules that can be used our application.
Example:-
 - if you wanna import css files directly into javascript file you can use using CSS loader.
 - if you want to import an asset like an image, there's an image loader.

> What is babel loader?
Babel is a loader that will actually transpile newer modern javascript syntax to older syntax that older browsers can understand which can make your application more compatible with older browsers.


`Plugins` are used extended functionality of webpack. For instance if you wanna minnify your javascript u can use **Minification Plugin** 
There is webpack called `HTML Webpack plugin` which will automatically generate our HTML production files.
There is also webpack called `Dev Server` which is a plugin that will give us nice dev server that iwll auto reload whenevr we save and so on.



`Src` Source code folder
`Dist` Webpack will create automatically when we run our build command. You can manually put index.html inside it. Dist is the production code which go to server.


# How to install Webpack?
[WebPack](https://webpack.js.org/guides/getting-started/)

Webpack should be install in dev dependency for loaders, plugins for that also.

**[Step1]** npm init -y               ->when u do this 
```js
        "type": "module"     
        "scripts": {
            "build": "webpack --mode production"
        },
```

^ SomeTime it will give error so you must because of file as we defined type if we remove the type <br>
                  import message from "./message";
<br> this will work....

* if you want type to be there "type" : "module" than file extension name is important
            import message from "./message.js";

**[Step2]:**
- npm install -D webpack
- npm install -D webpack-cli
<br>        OR
- npm install webpack webpack-cli --save-dev
<br>      OR
- npm install -D webpack webpack-cli 

**[Step3]:**
```bash
        dist
         |__ index.html
         |__src   
             |__index.js
             |__message.js
         |__package.json
```
 > **[Run]** npm run build

After we run we will see in Dist folder a `main.js` folder created by webpack which contains whatever functionality we have in our source folder but just bundled into single file tht we are including with our HTML.
```bash
    dist
      |__ index.html
      |__ main.js       <----- Here
```

### Using webpack.config.js
In webpack5 they made dont have to have a config file for it work.
 > In root we create `webpack.config.js` <br> Now config file actually uses common js syntax so keep it in mind

FOR `webpack.config.js`
```bash
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
```
> *What we change is ?*  Now we can give file name here before was `main.js` now we can change name to anything `bundle.js` & we can give now entry point of folder and mode will be `developement` before we need to tell them it was for production `webpack --mode production` now it no need.

**[Change]:** `package.json`
```bash
OLD -> 
    "scripts": {
        "build": "webpack --mode production"
    },

NEW ->
    "scripts": {
        "build": "webpack"
    },
```

**[Change]:** `index.html`
```bash
<script src="bundle.js" defer>
```
This is bundle.js which will be created....



# 🚀 Webpack, CommonJS, and ES Modules — Why `.js` Sometimes Works Without Typing It
Ever wondered why your `import` sometimes works **without** `.js`… and sometimes explodes in your face?  
Let’s walk through the mystery step-by-step. 🕵️‍♂️

---

## 1️⃣ CommonJS vs ES Modules — The Two Worlds 🌍

### **CommonJS (CJS)** — The OG Node.js Module System  
- Uses `require()` and `module.exports`  
- By default in Node **when** `"type": "commonjs"` is in `package.json` (or no `"type"` field at all)  
- Node is **lenient**: if you omit the file extension, it will try `.js`, `.json`, `.node` automatically.  
- **In Webpack configs:**  
  - You usually see `const path = require('path');`  
  - You use `module.exports = { ... }` instead of `export default { ... }`

```js
// CommonJS import example
const msg = require('./message'); // Works without `.js`
```
 > In CommonJS ("type" not set or "type": "commonjs")
```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
};
```


### **ES Modules (ESM)** — The New Kid on the Block
Uses `import` / `export` syntax
Active in Node when `"type": "module"` is present in `package.json` or file ends with `.mjs`

Node is strict: file extension is mandatory in imports.
```js
// ES Module import example
import msg from './message.js'; // `.js` is required here
```
 > In ES Modules ("type": "module" or .mjs file)
```js
import path from 'path';

export default {
  mode: 'development',
  entry: './src/index.js',
};
```

**[Comming Back to webPack]**
 - Make sure your file doesnt have `type` in `package.json` it might give error.

 > *[Reason]:* With no "type" in package.json, Node treats config files as CommonJS, and Webpack’s own parser happily handles import/export in your source code without you needing .mjs or special loaders.

For example
`index.js`
```js
import message from "./message";

console.log(message);
```

`message.js`
```js
const message = {
    id: 1,
    text: 'Hello World'
};

export default message;
```

 > Run `npm run build`

You will see in build.js which is in `developement` and you will see content in it which is big but in `production` mode it was short.



### PROBLEM
We have to run `npm run build` everytime we made changes. So there we will use `Webpack dev server` plugin so that we don't have to do it. It will just be a server much like live server that will auto, you know auto reload....