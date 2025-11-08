/*
 Generators => which is same like iterators which is used to generate the iterators.
 So generators are actually functions that can be paused and resumed.

There is keyword called yield, and that is actually kind of pause the function and we can use it just like iterators.next() and iterators.next().value 

How javascript know it is generator???
            function*  nameOffunction() {
            }

here * is important to tell javascript that it is generator
*/

function* createTeamIterator(teams){
    for(let i = 0; i < teams.length; i++){
        yield teams[i];
    }
}

const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];

const iterator = createTeamIterator(teams);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
* So what we are doing is basically pausing the function that is `yield` and wherever we want the yield and returning from there `teams[i]` whatever we want as the value which is in this case a team that is comming out as value 
*/

// It is iterable
for(const team of createTeamIterator(teams)){
    console.log(team);
}

// Spread operator :- we can have an array
console.log(...createTeamIterator(teams));

// destructuring

const [first, second, third] = createTeamIterator(teams);
console.log(first, second, third);





