//^ Answers 1
// function getCelsius(f){
//     let c = (f - 32) * 5 / 9;
//     return c;
// }
// console.log(getCelsius(32));        

// * oR
// const getCelsius = (f) => {
//     return (f-32) * 5 / 9;
// }
// console.log(getCelsius(32));


// ^ Answer 2

const minMax1 = (...arr) => {
    const mx = Math.max(...arr);
    const mn = Math.min(...arr);
    return {Max: mx, Min: mn};
}
// console.log(minMax1(1,2,3,4,5));

const minMax = (arr) => {
    const mx = Math.max(...arr);
    const mn = Math.min(...arr);
    return {Max: mx, Min: mn};
}
console.log(minMax([1,2,3,4,5]));


//^ Answer 3

(function (a,b){
    const length = a;
    const breadth = b;
    console.log(`The area of a rectangle with a length of ${a} and a width of ${b} is ${a*b}`); 
})(7,5);


// or
((length,width) =>{
    const area = length * width;
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;
    console.log(output);
})(10,11);
