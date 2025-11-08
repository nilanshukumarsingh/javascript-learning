// * filter() => filter method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exnerant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

const EvenNumbers = [1,2,3,4,5,6,7,8,9,10];
// const answer = EvenNumbers.filter(number => number%2 === 0);
// const answer = EvenNumbers.filter(function(number){
//     return number % 2 === 0;
// });

// Same with forEach
let evenNum = [];
EvenNumbers.forEach((number) => {
    if(number % 2 === 0){
        evenNum.push(number);
    }
})
// console.log(evenNum);

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

// Get only retail companies
const retailCompanies  = companies.filter(retial => retial.category === 'Retail');
console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005
const getEarlyCompanies = companies.filter((earlyCompany) => earlyCompany.start >= 1980 && earlyCompany.end <= 2005);
console.log(getEarlyCompanies);

// Get companies that lasted 10 years or more
const longCompanies = companies.filter((longCompany) => (longCompany.end - longCompany.start) >= 10);
console.log(longCompanies);

