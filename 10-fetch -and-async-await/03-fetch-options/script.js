// https://jsonplaceholder.typicode.com/

// ^There are option you can pass into you request? There is methods, the header, the body option
// We have seen only GET request till that now that is deafault. So if we want to make a post, put or delete request than we have to specify that as the method.

// There is headers option to send any custom HTTP headers that we want. So for eg, to specify the type of data you're sending in a post request, you would add the content type header.
// In fact a lot of API's have authenticaation where you would authenticate and there you would have some knd of token that wyou would then send in headers to access protected pages  

// Now in header, we can send anything like `hello: world`. In many cases you'll send a token so you authenticate with the API. Somehow, you send some login data or whatever adn if it passes you'd get a token sent back and then you store that token in like local filestorage or something that you'd send that token with your request and then the server validate who you are and what you can access what pages and resources. 



// 3) Body.. So if you have a form let's say recipe application and you want to add new recipe, you would make a post requeset and the data come through the form and you would put in the body of the request.To get submitted to the database or backend API does.


// These GET POST PUT DELETE methods and these endpoints all together they give us CRUD functionality of post, create, read , update and delete.
/*
function createPost(post){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        // body: JSON.stringfy(post) // we can pass like this but if u want to specify [post is an object so if we have convert it into JSON string]
        body: JSON.stringify({
            title: post.title,
            body: post.body
        })
    })
}
*/

// & ---> if we see at JSON file. If you're checking your fields like id in most cases id will be created automatically and increment.  We can here specify more like we can deftructure the 'post' that we need.

// So this is the data that will usually goint to send in database.But if its your API that you built with whatever like NODEJS, PHP , pYthon or any other language than you more likely need to store in the database.
function createPost({title,body}){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers:{ // In http we can send headers
            'Content-Type': 'application/json',
            hello: 'World',
            token: 'abc123'
        }
    }).then(res => res.json())
      .then(data => console.log(data));
}

// You'll get back from a post request in the newly create resource
createPost({title: 'My Post',body:'This is my Post'});
// * If you check the console you will get an `id: 101`. If we look at the posts and we go all the way downm the last one has the ID of 100. Now thing is with JSON placeholde ris whenever you make post request, even if i make another one, it'l always be going to be 101 because it doesn't actually get added to the databases. So they contain fake API that doesn't save on the database but it response as real API.

// Now if we want to verify we can? Go to console -> network -> posts [Status -: 201] -> click [Response headers come from server & Request headers -> content-type : application/json & you can see there token: abc123]. And server can used this an authenticate with us.


