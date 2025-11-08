// 1) Way is to put eventListener in HTML...
// <button onclick="onClear()" id = "clear" class="btn-clear">Clear All</button>
// function onClear(){
//     alert("Clear Items");
// }

// 2) JAVASCRIP Event Listener
// const clearBtn = document.querySelector('#clear');
// clearBtn.onclick = function () {
//     alert('Clear Items');
// };

// We can't have as many event listener but we can use addEventListener
// clearBtn.onclick = () => {
//     console.log('Clear Items');
// }

// 3) using addEventListener
// clearBtn.addEventListener('click',function (){
//     alert('Clear items')
// });

// We will get first alert then once I clear that up, then the console logs. And the reason that it doesnt run at the same time like you dont see the log at the same time is because an alert is blocking operation. Alert is an synchronous and blocking.
// clearBtn.addEventListener('click', () => console.log('Clear Items'));


// ** Using function

// function onClear(){
//     alert("Clear Items");
// }
// clearBtn.addEventListener('click',onClear); //if you pass the parentheses onClear() it will be going to execute. The function gets invoked because we are using parenthesis, so just want to pass in callback you want to just pass function name so that it way it only fires off when you fire the event




// 4) using removeEventListener
/*
We will call it five seconds after the page loads and using function called "setTimeout()" 
*/
// function onClear(){
//     alert("Clear Items");
// }

// setTimeout(() => clearBtn.removeEventListener('click',onClear),5000); // After 5 seconds we are not able to use 


// We can trigger an event programmatically. So if i wanted my script actually do the click insetead of coming over here and clicking.

// setTimeout(() => clearBtn.click(),5000);


// ? Now when we click on clear All it will remove all
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click',onClear);
function onClear(){
    const itemList = document.querySelector('ul');

    // itemList.innerHTML = ''; // 1st way

    // 2nd way
    // const items = itemList.querySelectorAll('li');
    // items.forEach((item) => item.remove());

    // 3rd way
    while(itemList.firstChild){ // if there is firstChild than there is list property
        itemList.removeChild(itemList.firstChild);
    }
}