let d;

d = new Date(); // It is an object

d = d.toString();

// ^ 0 -> January , 1 -> February , 2 -> March .... 
// ^ hour:minute:seconds 12,30,0
d = new Date(2021, 0, 10, 12, 30, 0); 

d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00'); // MM/dd/yy
d = new Date('2022-07-10') // yy-month-dd
d = new Date('07-10-2022'); // mm-dd-yy


// ^ TimeStamp -> Unix timestamp is a system for describing a point in time and what it is, it's an integer that represents the number of seconds that's elapsed that's passed the date of january 1st 1970 which is an arbitrary date
d = Date.now(); // It gives way to always be able to mark an exact you know millisecond in time

d = new Date('07-10-2022 12:30:00');
d = d.getTime(); // It will be exact timestamp for that date
d = d.valueOf(); // Exact timestamp for rn this date and time 

// * JavaScript timestamp is expressed in millisecond 
d = new Date(1742640445867);
// to convert timestamp millisecond into second
d = Math.floor(Date.now() / 1000);
console.log(d);