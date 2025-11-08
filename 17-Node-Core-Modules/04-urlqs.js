const url = require('url');
// const { url } = require('url');
const querystring = require('querystring');

// url.parse() -: It give the url details

// const myUrl = url.parse('https://example.com/listening?id=1000&premium=true');
const myUrl1 = new URL('https://example.com/listening?id=1000&premium=true');
console.log(myUrl1);

// url.format() -: It takes an object and give url string
const myUrl2 = url.format({
    protocol: 'https',
    host: 'www.example.com',
    pathname: 'listing',
    query: {
        id: 1000,
        premium: true
    }
});
console.log(myUrl2);


// querystring.parse()
const myQs = 'year=2023&month=january&day=20';

const q = querystring.parse(myQs);
console.log(q);
console.log(q.month);

//querystring.stringify() -: to convert an object into a query string

const myQs2 = querystring.stringify({
    year: 2023,
    month: 'january',
    day: 20,
});

console.log(myQs2);