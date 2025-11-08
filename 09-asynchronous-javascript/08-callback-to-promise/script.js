const posts = [
    { title : 'Post One', body : 'This is post one'},
    { title : 'Post Two', body : 'This is post two'},
];

// We are not doing with callback as we are using promises here.
/*
function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            posts.push(post);
            resolve();
        },2000);
    });
};
*/


// Mimicking an asynchronous task, let's mimic an error
function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{ 
            let error = true; // No error when it is falsee
            if(!error){
                posts.push(post);
                resolve();
            }else{
                reject('Something went wroing');
            }
        },2000);
    });
};


function getPosts(){
    setTimeout(() =>{
        posts.forEach((post) =>{
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        });
    },1000);
}

function showError(error){
    const h3 = document.createElement('h3');
    h3.innerHTML = `<strong>${error}</strong>`;
    document.getElementById('posts').appendChild(h3);
}

createPost({title : 'Post One', body : 'This is post'}).then(getPosts).catch(showError);