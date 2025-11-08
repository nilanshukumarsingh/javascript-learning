const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
];

const result = people
  .filter((person) => person.age <= 25)
  .map((person) => {
    return {
      name: person.firstName + ' ' + person.lastName,
      email: person.email,
    };
  });

console.log(result);


//Answer 2
const numbers = [2, -30, 50, 20, -12, -9, 7];
// let sum = 0;
// numbers.forEach((num) => {
//   if (num > 0) {
//     sum += num;
//   }
// });
// console.log(sum); 

const positiveSum = numbers
  .filter((num) => num > 0)
  .reduce((acc,cur) => acc + cur, 0);
console.log(positiveSum);

// Answer 3
const words = ['coder', 'programmer', 'developer'];
const capitalizedWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1,word.length);
}); 
console.log(capitalizedWords);


const users = [
  { firstName: 'Alice', lastName: 'Smith', email: 'alice@gmail.com', active: true },
  { firstName: 'Bob', lastName: 'Brown', email: 'bob@yahoo.com', active: false },
  { firstName: 'Charlie', lastName: 'Davis', email: 'charlie@gmail.com', active: true },
  { firstName: 'Diana', lastName: 'Miller', email: 'diana@outlook.com', active: true }
];

