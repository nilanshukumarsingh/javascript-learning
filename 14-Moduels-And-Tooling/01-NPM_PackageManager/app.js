// https://www.npmjs.com
// https://www.npmjs.com/package/axios

/*
What it does? Create an package.json file.
Step1 -> npm init       
                or
& If you dont want the question while creating package.json just default you want here is direct command
    `npm init -y`


Step 2 -> npm i axios

* So you will noticed a node_modules folder but here we install only one dependency that is axios but in file you will see bunch of folders. Reason for that is this includes not only the dependency that we installed but the dependency of that dependency and then the dependencies of those depenedencies.

* So this node_models are always packed and this folder you dont wanna push in github. Only place it should be in the local machine.

*So the reason is that we dont need this is because if someone downloads your project withtout the node_modules folder, they simply just have to run 
^                 npm install
&So what it do is it will install whatever you have in the dpendencies object and create the node modules folder.

^          npm i -g axios
It will installed globally, it aint gonna install in your local folder here.


! DEV DEPENDENCIES
Flag is -D
^                    npm i -D nodemon
                      OR
^                    npm install --save-dev nodemon


What it do is it will constantly watch your application so that when you update it, you don't have to run it again. It'll monitor your node app.So that's something you dont use in production. There is no reason to push it to your production server.It is developement dependency


STEP 3 ->     
change this in package.json
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
    },


STEP 4 -> How to run??

npm run 
       OR
npm run dev            -> for nodemon

TO STOP -> Ctrl + C

*/


// Now how to use AXIOS?

const axios = require('axios');

async function getPost(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

    // But in axios data is on response object
    // const data = res.json(); // So we dont need to do that
    console.log(res.data);
}

getPost();