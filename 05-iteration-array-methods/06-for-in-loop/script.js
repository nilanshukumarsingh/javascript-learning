const colorObj = {
    color1 : 'red',
    color2 : 'blue',
    color3 : 'orange',
    color4 : 'green',
};

for(const key in colorObj){
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for(const color in colorArr){
    console.log(color); // It will give the index or numeric keys
    // console.log(colorArr[color]); // It will give the value
}

