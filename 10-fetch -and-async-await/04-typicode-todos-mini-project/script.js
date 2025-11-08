// https://jsonplaceholder.typicode.com/todos

/*
* 1) First we will fetch them and put it into DOM
* 2) You can limit them as you want to `https://jsonplaceholder.typicode.com/todos?_limit=5 ` and we will get only 5 todos.
* 3) We will show a doc background that there is class of done when todos is completed. For eg In API completed `value = true` 
* 4) We will be able to update by clicking and otogglin the completed value that is the in `todo-list`. If we click it, we want dark background but we also need to make a put request so we can update that value on the server.
* 5) If we doublic click and have todo get deleted.
*/


const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () =>{
    fetch(apiUrl + '?_limit=10')
      .then(res=> res.json())
      .then((data) =>{
        // console.log(data); // Now we will add in todo-list
        data.forEach((todo) => addTodoToDom(todo));
      });
};

const addTodoToDom = (todo) =>{
  const div = document.createElement('div');
  div.classList.add('todo');
        div.appendChild(document.createTextNode(todo.title));
        div.setAttribute('data-id',todo.id); // custom attribute

        if(todo.completed){
            div.classList.add('done');
        }

        document.getElementById('todo-list').appendChild(div);
        

}

const createTodo = (e) => {
  e.preventDefault();
  
  // ? How do we get the value from the input?
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false
  }

  // ? How to make post request for newTodo?
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then((data) => {
      addTodoToDom(data);
      e.target.firstElementChild.value = '';
    });

  }

const toggleCompleted = (e) =>{
  if(e.target.classList.contains('todo')){ // because it select on ul also thats we use this..
    e.target.classList.toggle('done');

    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
}

const updateTodo = (id,completed) =>{
  // console.log(id,completed)
  fetch(`${apiUrl}/${id}`,{
    method: 'PUT',
    body: JSON.stringify({completed}),
    headers: {
      'Content-Type' : 'application/json'
    }
  }).then(res => res.json())
    .then(data => console.log(data));
}

const deleteTodo = (e) => {
  if(e.target.classList.contains('todo')){
    const id = e.target.dataset.id;
    fetch(`${apiUrl}/${id}`,{
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => e.target.remove());
  }

}

const init = () => {
  document.addEventListener('DOMContentLoaded',getTodos);
  document.querySelector('#todo-form').addEventListener('submit',createTodo);
  document.querySelector('#todo-list').addEventListener('click',toggleCompleted);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
}

init();


