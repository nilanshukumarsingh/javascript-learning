function insertAfter(newEl,existingEl){
    existingEl.parentElement.insertBefore(newEl,existingEl.nextSibling);
    // instead of parentElement we could use parentNode
}

const li = document.createElement('li');
li.textContent = 'Insert Me after!';

const firstItem = document.querySelector('li:first-child');

insertAfter(li,firstItem);
