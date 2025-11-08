function first() {
    const x = 100;

    function second(){
        const y = 200; 
        console.log(x + y); // We can access from child, any variables that are in the parent scope.
    }

    second();
}
first();


if(true){
    const x = 100;

    if(x === 100){
        const y = 200;
        console.log(x + y);
    }

    // console.log(y); error we cant access y from here
}

 