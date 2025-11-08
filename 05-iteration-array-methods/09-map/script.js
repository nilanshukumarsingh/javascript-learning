// * The map() method created a new array populated with the results of calling a provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

// Same with forEach
const doubleNumbers2 = [];
numbers.forEach((number) => {
    doubleNumbers2.push(number * 2);
});
console.log(doubleNumbers2)


const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Technology', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Retail', start: 2000, end: 2020 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 1996 },
    { name: 'Company Seven', category: 'Auto', start: 1995, end: 2015 },
    { name: 'Company Eight', category: 'Technology', start: 2003, end: 2018 },
];  

// Create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an array with just company and category
// const companyInfo = companies.map((company) => `${company.name} (${company.category})`);
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});
console.log(companyInfo);


// Creae an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
    return {
        name: company.name,
        length: company.name.length,
        years: company.end - company.start + ' years',
    };
});
console.log(companyYears);


// & Chain map methods
const squareAndDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2);
console.log(squareAndDouble);

const squareAndDouble2 = numbers
    .map(function(number) {
        return Math.sqrt(number);
    })
    .map(function(sqrt){
        return sqrt * 2;
    });
console.log(squareAndDouble2);

// & Chaining different methods
const evenDouble = numbers 
    .filter((number) => number % 2 === 0)
    .map((number) => number*2);
console.log(evenDouble);