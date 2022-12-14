
async function load (){
    try{
    const response = await fetch('/getPosts', {//fetch the posts from the server
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    let body = await response.text();
    let posts = body.split("\n");
    for(let i = 0; i < posts.length - 1; i++){
        let post = JSON.parse(posts[i]);
        //entire post
        let postElement=document.createElement('div');
        postElement.id="postelement";
        //text element (Title, username and description)
        let textElement=document.createElement('span');
        textElement.id="textelement";
        //title parent and title
        let titleParent= document.createElement('a');
        titleParent.id="postTitle";
        let title = document.createTextNode(post.postTitle);
        //description parent and description
        let descriptionParent= document.createElement('a');
        descriptionParent.id="postDescription";
        let description = document.createTextNode(post.postText);
        //username parent and username
        let usernameParent= document.createElement('a');
        usernameParent.id="username";
        let username = document.createTextNode(post.Username);
        //image
        let img = document.createElement('img');
        img.src = '/img/' + post.img;

        //title with title parent
        titleParent.appendChild(title);
        //description with description parent
        descriptionParent.appendChild(description);
        //username with username parent
        usernameParent.appendChild(username);

        //append to text element
        textElement.appendChild(titleParent);
        textElement.appendChild(usernameParent);
        textElement.appendChild(descriptionParent);
        

        //append to post element
        postElement.appendChild(textElement);
        postElement.appendChild(img);

        //add to document 
        document.getElementById("posts").appendChild(postElement);
    }
    }
    catch(error){
        console.error(error);
    }
};

load();

