const form = document.getElementById('item-form');

function onSubmit(e){
    e.preventDefault();
    console.log('submit'); // if you dont have action attribute on your form or you're submitting to some kind of backend then its going to submit in the same page.

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if(item === '' || priority === '0'){
        alert('Please fill in all fields');
        return;
    }

    console.log(item,priority);
}

// form.addEventListener('submit',onSubmit);

function onSubmit2(e){
    e.preventDefault();
    
    const formData = new FormData(form);
    // console.log(formData); // we dont have direct acces to the values like an object of values.

    // ? get Method
    const item = formData.get('item');
    const priority = formData.get('priority');

    console.log(item,priority); // new method to get values

    // ? Entries method
    const entries = formData.entries();
    // console.log(entries); // Iterator -> it allows us to loop through it or iterate through it

    // It give each input or each item it gives me an array that has both the named and value
    for(let entry of entries){
        console.log(entry);
        console.log(entry[1]);
    }

}

form.addEventListener('submit',onSubmit2);