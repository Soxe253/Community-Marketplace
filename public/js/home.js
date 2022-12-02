
// let url = "/getPosts";
// let response = fetch(url, {
//     method:"GET",
//     headers: {
//         accept: 'application/json',
//     }
// })
// .then(response => response.json())
// .then(response => document.getElementById("test").innerHTML = JSON.stringify(response))


//https://reqbin.com/code/javascript
//THIS ONE https://dmitripavlutin.com/fetch-with-json/

// async function load() {
//     const response = await fetch('/getPosts');
//     const posts = await response.json();
//     console.log(posts); 
//     document.getElementById("test").innerHTML = JSON.stringify(posts)
//   }
//   load();

async function load (){
    try{
    const response = await fetch('/getPosts', {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    let body = await response.json();
    console.log(body);
    let posts = body
    document.getElementById("test").innerHTML = posts.postText;
    document.getElementById("img").src = '/img/' + posts.img;
    console.log(document.getElementById("img").src);
    }
    catch(error){
        console.error(error);
    }
};

load();


