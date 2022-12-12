
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
    let body = await response.text();
    let posts = body.split("\n");
    console.log(posts);
    console.log(posts[0]);
    for(let i = 0; i < posts.length; i++){
        let post = JSON.parse(posts[i]);
        const text = document.createTextNode(post.postText);
        const img = document.createElement('img');
        img.src = '/img/' + post.img;
        document.getElementById("test").appendChild(img);
        document.getElementById("test").appendChild(text);
    }
    }
    catch(error){
        console.error(error);
    }
};

load();
localStorage.setItem('Username', 'Test');
console.log(localStorage.getItem('Username'));

