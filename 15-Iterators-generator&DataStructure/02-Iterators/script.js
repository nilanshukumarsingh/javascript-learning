/*
Iterators =: which are objects that define a sequence and potentially a return value upon completion.
And these are objects that implement the iterator protocol by having next method.
    eg {value: 1, done: false}
If we are not done the iterator will be false... 


*/

const app = {
    nextIndex: 0,
    teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
    next(){
        if(this.nextIndex >= this.teams.length){
            return {done: true};
        }
        const returnValue = {value: this.teams[this.nextIndex], done: false };
        this.nextIndex++;
        return returnValue;
    }
}

console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());  // here we get done true because we have done iterating

/*
 * Even though it is not iterator, it is not iterable and we can test by doing for loop
for(const team of app){
    console.log(team);
}

we will get error that it is not iterable
*/

// ^ lets do with `Symbol.iterator`

const app1 = {
    teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
    [Symbol.iterator]: function(){
        let nextIndex = 0;
        return {
            next: () => {
                return nextIndex < this.teams.length ? {value: this.teams[nextIndex++], done: false} : {done: true};
            },
        };
    },
};

const iterator = app1[Symbol.iterator]();
// console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next()); // if we try for last value that will be undefined and if we try to see its object it is done true

for(const team of app1){
    console.log(team);
}










