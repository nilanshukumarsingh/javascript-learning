let x;
// let d = new Date('2020/10/12');
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear(); // To get only year

x = d.getMonth() + 1; // TO get only month

x = d.getDate(); // to get only date

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;


// ^ There are some API for date. It's called intl.date time format and it's more modern and powerful way to format dates in local sensitive way  
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);

x = d.toLocaleDateString('default',{month: 'short'});


// Best way to format the date 
x = d.toLocaleDateString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
});

console.log(x);

