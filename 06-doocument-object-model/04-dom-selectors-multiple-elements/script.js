// querySelectorAll() -> selector for multiple elements

const listItems = document.querySelectorAll('.item');
console.log(listItems);
console.log(listItems[1].innerText);//if you want an individual item just like an array 

// listItems.style.color = 'red'; // this wont work as we are trying to change on node list
listItems[1].style.color = 'red'; // this will work or we have to change all we can use forEach loop

// listItems.forEach((item, index)=>{
//     item.style.color = 'red';
//     if(index == 1){
//         item.remove();
//     }
//     if(index == 0){
//         item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`; //if we use innerText the cross button will be removed
//     }
// });

// * getElementsByClassName
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[1].innerText);

// listItems2.forEach((item)=>{
// forEach is not function as listItem2 is HTMLcollection not nodeList so we have to convert into an array 
const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item)=>{
    console.log(item.innerText);
});

// * getElementByTagName
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3); // This is an HTMLCollection so we have to print if than we have to convert it into an array
const listItemsArray2 = Array.from(listItems3);
listItemsArray2.forEach((item)=>{
    console.log(item.innerText);
});



