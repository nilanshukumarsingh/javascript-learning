console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 > 16);


// && - will return first falsy value or the last value 
let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30; // we will get empty string

console.log(a);

// const posts = []; // if we try to access posts[0] it will show undefined in webpage and we dont want that
const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);


// ^ || => will return the first truthy value or the last value
let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;
console.log(b);


// ^  ?? => Returns the right side operand when the left is null or undefined
let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);
