
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
    for(let i = 0; i < posts.length - 1; i++){
        let post = JSON.parse(posts[i]);
        let postElement=document.createElement('div');
        postElement.id="postelement";
        let textElement=document.createElement('span');
        textElement.id="textelement";
        let titleParent= document.createElement('a');
        titleParent.id="postTitle";
        let title = document.createTextNode(post.postTitle);
        let descriptionParent= document.createElement('a');
        descriptionParent.id="postDescription";
        let description = document.createTextNode(post.postText);
        let img = document.createElement('img');
        img.src = '/img/' + post.img;
        titleParent.appendChild(title);
        descriptionParent.appendChild(description);
        textElement.appendChild(titleParent);
        textElement.appendChild(descriptionParent);
        postElement.appendChild(textElement);
        postElement.appendChild(img);
        document.getElementById("posts").appendChild(postElement);
    }
    }
    catch(error){
        console.error(error);
    }
};

load();

