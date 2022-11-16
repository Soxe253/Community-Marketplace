
//const fs = require('fs');

window.addEventListener("DOMContentLoaded", buttonListener);


async function buttonListener(){
    let button = document.querySelector("#login");
        button.addEventListener("click", async function(){
            var user = {
                userName: document.querySelector("#username").value,
                password: document.querySelector("#password").value
            }
            
            jsonUser = JSON.stringify(user);

            console.log(jsonUser);
            jsUser = JSON.parse(jsonUser);
            console.log(jsUser.userName + " " + jsUser.password);
            window.location = /views/home.html;
        })
}





