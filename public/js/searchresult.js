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
    for(let i = 0; i < posts.length - 1; i++){
        let post = JSON.parse(posts[i]);
        const title = document.createTextNode(post.postTitle);
        const text = document.createTextNode(post.postText);
        const img = document.createElement('img');
        img.src = '/img/' + post.img;
        document.getElementById("test").appendChild(title);
        document.getElementById("test").appendChild(img);
        document.getElementById("test").appendChild(text);
    }
    }
    catch(error){
        console.error(error);
    }
};

load();

