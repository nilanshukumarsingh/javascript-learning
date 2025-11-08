// Shopping List Project Specs
/*
Add items to list via form
Remove item from list by clicking the 'X' button
Clear all items with "clear" button
Filter the items by typing in the filter field
Add LocalStorage to persist items
Click on an item to put into "edit mode" and add to form 
Update item
Deploy to Netlify
*/


<!-- What is localStorage / sessionStorage -->
 - Property on the 'Window' interface that allows us to access a storage object
 - Data is stored in the browser
 - Data is stored as key/value pairs and values are string (Can not store objects)

LocalStorage and sessionStorage have the same API. The difference is that localstorage does not expire, while sessionStorage only lasts until the page is closed.

 * LocalStorage Methods -:

        localStorage.setlitem('name','Brad'); // Set a value with a key
        localStorage.getlitem('name'); // Get a value using the key
        localStorage.removeitem('name'); // remove item using the key
        localStorage.clear(); // clear all values

//** LocalStorage
localStorage.setItem('name','Brad'); // if we reload the page it will be still there in `application` console
console.log(localStorage.getItem('name'));
// localStorage.removeItem('name'); // it remove
localStorage.clear(); // clear any values we have


// If we add an item in DOM and reloads the page it will be gone... that's why need to save in the localStorage. So we need to remove,fetch from the localStorage.

//Its key value pairs and the value has to be a string.What we want to save is the list of items. So we will have an array of list of item, than stringify(json.stringify) and put in localStorage. So it actually storead as string, but it still looks like an array. Than we take t out, we can run it through the Json.parse and that will turn back into an array.