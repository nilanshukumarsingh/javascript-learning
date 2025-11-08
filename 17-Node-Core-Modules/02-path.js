// ## PATH MODULE
// Now path module is core module that allows us to work with file and directory paths and it can be used to get the base name of a file, get the extension of a file, create absolute paths.

// Path seperator varys for every windows. For example -: on windows, it is backslash, and on linux and mac is forward slash


const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// basename()
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath,'.js'); // only get the basename not extension pass the extension name in second argument

console.log(base1);
console.log(base2);


// extname() => give the extension name of the file
const ext = path.extname(myFilePath);
console.log(ext);

// dirname() => get the directory of a file
const dir = path.dirname(myFilePath);
console.log(dir); // we get subfolder/anotherfolder


// join() -: it creates files path. But it will add the correct seperator
const myPaths = path.join('subfolder','anotherfolder','index.js');
console.log(myPaths); // it give relative folder


// resolve() => it will create absolute path. And it takes any number of arguments and joins them together
const myPath2 = path.resolve('subFolder', 'anotherFolder', 'index.js');
console.log(myPath2); // it will give entire thing that is absolute path


// __dirname => it is called environment variables and it tells you the absolute paths of the directory the currently executing files

console.log(__dirname);

// __filename => it give the same thing but also the file name where we are in.
console.log(__filename);
