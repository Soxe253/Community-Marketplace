let username = localStorage.getItem('Username'); // pull user information from local storage and display it on profile page
console.log(username);
const textuser = document.createTextNode(username);
document.getElementById("username").appendChild(textuser);
let groupcode = localStorage.getItem('GroupCode');
console.log(groupcode);
const textcode = document.createTextNode(groupcode);
document.getElementById("groupcode").appendChild(textcode);
let profilename = localStorage.getItem('Name');
console.log(profilename);
const textname = document.createTextNode(profilename);
document.getElementById("name").appendChild(textname);

var user = {
    userName: localStorage.getItem("Username"),
    password: localStorage.getItem("Password")
}

let profile = JSON.stringify(user);
console.log(profile); 
async function loadPosts (){
    try{
    const response = await fetch('/getMyPosts', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: profile
    });
    let body = await response.text();
    let posts = JSON.parse(body);
    console.log(posts);
//    let posts = body.split("\\r");
    for(let post of posts){        
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
        console.log(post);
        titleParent.appendChild(title);
        descriptionParent.appendChild(description);
        textElement.appendChild(titleParent);
        textElement.appendChild(descriptionParent);
        postElement.appendChild(textElement);
        postElement.appendChild(img);
        document.getElementById("myposts").appendChild(postElement);
    }
    }
    catch(error){
        console.error(error);
    }
};

loadPosts();

