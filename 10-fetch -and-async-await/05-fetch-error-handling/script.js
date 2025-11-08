// https://httpstatus.io/mocking-data -> To test your API

// fetch('https://mock.httpstatus.io/200')
//     .then((response)=>{
//         return response
//     })
//     .then((data)=>{
//         console.log('success');
//     });


// ^ 404 -: which is an error not found code
// fetch('https://mock.httpstatus.io/404')
//     .then((response)=>{
//         return response
//     })
//     .then((data)=>{
//         console.log('success');
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// Why my .then() is running ? Browser does tell us it's a 404 in red. But my `.then()` is still running and `catch` wont run if your getting error status why it wont run?
// There is third party library called `Axios`, if you hit an error, something that's not in the 200 range, than `.catch` does fire off. But with fetchAPI it's little more manual you have to check error status yourself that if it is 404 ro 200. But it does work with network error


// ^ Catch runs on a network error
// fetch('http://hello123.net')
//     .then((response)=>{
//         return response;
//     })
//     .then(() => {
//         console.log('Success');
//     })
//     .catch((error)=>{
//         console.log(error);
//     });


// ^ Now to check why it runs we can't depened .catch and we still get a success [Test with resonse.ok]
// fetch('https://mock.httpstatus.io/404')
//     .then((response)=>{
//         // ? We can check status and ok and statusText
//         /*
//         & console.log(response.status);
//         & console.log(response.ok); // if anything is out of range 200 it going to be false
//         & console.log(response.statusText);
//         */

//         if(!response.ok){
//             throw new Error('Request Failed');
//         }
//         return response;
//     })
//     .then(() => {
//         console.log('Success');
//     })
//     .catch((error)=>{
//         console.log(error);
//     })


// check for specific code [400,404,500,200]
fetch('https://mock.httpstatus.io/404')
    .then((response) =>{
        if(response.status === 404){
            throw new Error('Not Found');
        }else if(response.status === 500){
            throw new Error('Server Error');
        }else if(response.status !== 200){
            throw new Error('Request Failed');
        }
        return response;
    })
    .then(() => {
        console.log('Success');
    })
    .catch((error) => {
        console.log(error);
    })
