
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
            localStorage.setItem("currentloggedin", jsonUser.userName);
            console.log(jsonUser);
            jsUser = JSON.parse(jsonUser);
            console.log(jsUser.userName + " " + jsUser.password);
            localStorage.setItem('Username', 'test');
            console.log(localStorage.getItem('Username'));
            window.location = "/views/home.html";
        })
}





