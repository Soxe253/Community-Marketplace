async function buttonListener() {
    let button = document.querySelector("#createPost"); //sets the button to listen for a new post
        button.addEventListener("click", async function(){
            var post = {                                    //stores the post as a variable
                postContent: document.querySelector("#desc").value
            }

            console.log(postContent);
            jsonPost = JSON.stringify(post); //converts the post to a string

            console.log(jsonPost);
            // document.querySelector(#posts).textContent = jsonPost; //adds the new post to the home page (it doesn't work though)
            window.location = /views/home.html; //returns to home page
        })
}