// function toggle(e){
//     e.target.classList.toggle('danger');
// }
// document.querySelector('button').addEventListener('click',toggle);

// * Creating an callback for our own ?
// & Doesn't mean if we are using callback mean it's always asynchronous. In case of like add event listener and set timeout, we saw that it's a synchronous, it gets put into taks queue, the event loop moves it to the call stack. But in case of using like forEach or map on arrays, those take in callbacks. But it is not asynchronous those are executed right away.

const posts = [
    {title : 'Post One', body : 'This is post one'},
    {title : 'Post Two', body : 'This is post two'}
];

// When you are creating a post you're reaching out to a server, you're making post request an HTTP request, you're sending data to add to the post whether the database.
// function createPost(post){
function createPost(post,cb){
    setTimeout(() =>{
        posts.push(post); // add the post to an array
        cb();
    },2000);
}   


function getPosts(){
    // fetching from server, you're making a newtwork request so that takes some time.
    setTimeout(() => {
        posts.forEach(function (post){
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);

        });
    }, 1000);
}

//-----: You will see "post Three" is not there as it took longer than get posts . So, you never know how long it's going to take to do for each request.So to resolve we are going use a callback function. We're going to make this get post a callback of create post.
// createPost({title: 'Post Three', body:'this is post three'})
createPost({title: 'Post Three', body:'this is post three'},getPosts)

// getPosts(); // we will not call here now for createPost


// Observe -: You will see after 1sec you have fetch the data. So this replicates sending a network request out to some back end , some API that give us post and than we put it on the page.


