const d = new Date(10,30,2025, 9, 0, 0);
const hour = d.getHours();

if(hour < 12){
    console.log('Good moring');
}else if(hour < 18){
    console.log('Good Afternoon');
} else{
    console.log('Good Night');
}

// Nested if else 
if(hour < 12){
    console.log('Good moring');

    if(hour === 6){
        console.log('Wake up');
    }
}else if(hour < 18){
    console.log('Good Afternoon');
} else{
    console.log('Good Night');

    if(hour >= 20){
        console.log('zzzzzzzzzzzz');
    }
}

// ^And operator
if(hour >= 7 && hour < 15){
    console.log('It is work time');
}

// ^ Or operator
if(hour === 6 || hour === 20){
    console.log('Brush your teeth!');
}


console.log(hour);