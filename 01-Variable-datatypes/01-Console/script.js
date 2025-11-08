// ? Console
console.log(100);
//! To clear the console we use function clear()
console.log('Hello World');
console.log(20,"Hello",true);
const x = 100;
console.log(x);

console.error('Alert');
console.warn('Warning');

console.table({name: 'Nilanshu', email: 'nilanshu@gmail.com'});

console.group('Simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green;'
console.log('%cHello World',styles);

