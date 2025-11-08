/*
    ES MODULES
You can use ES modules with Node, you know in your backend code 


TO USE ES MODULES --->
        we have to use `type="module"` attribute
  eg      <script src="app.js" type="module" defer></script>

In older borwser it wont work, so there we will use module Bundlers as ES modules are not supported.


here in ES MODULES we do
  export default capitalizeWords;

than IMPORT IT ON  APP.JS
     import capitalizeWords from "./modules/utils.js";

*/



// import capitalizeWords from "./modules/utils.js";
import {capitalizeWords, makeMoney} from "./modules/utils.js";
import Person from "./modules/Person.js";

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

const person1 = new Person('John', 40);
person1.greet();

 