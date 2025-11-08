let x;

const library = [
    {
        title: 'Nilanshu',
        author: 'Kumar Singh',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Steep',
        author: 'Kur Singh',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Skuu',
        author: 'Kulngh',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
// console.log(library);

// Step 3
const { title: firstBook } = library[0];

// console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);