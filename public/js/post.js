window.addEventListener("DOMContentLoaded", buttonListener);

let username = localStorage.getItem('Username');
let groupcode = localStorage.getItem('GroupCode');
username = username.substring(1, username.length - 1);
groupcode = groupcode.substring(1, groupcode.length -1);
document.getElementById('username').value = username;
document.getElementById('groupcode').value = groupcode;


async function buttonListener() {
    let button = document.querySelector("#createPost"); //sets the button to listen for a new post
        button.addEventListener("click", async function(){
            var post = {                                    //stores the post as a variable
                postContent: document.querySelector("#desc").value
            }

            console.log(post);
            jsonPost = JSON.stringify(post); //converts the post to a string

            console.log(jsonPost);
            window.location = "/views/home.html"; //returns to home page
        })
}
