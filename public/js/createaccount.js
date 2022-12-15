
//const fs = require('fs');

window.addEventListener("DOMContentLoaded", buttonListener);


async function buttonListener(){
    let button = document.querySelector("#createAccount");
        button.addEventListener("click", async function(){
            var user = {
                userName: document.querySelector("#username").value,
                password: document.querySelector("#password").value,
                firstName: document.querySelector("#firstName").value,
                lastName: document.querySelector("#lastName").value,
                groupCode: document.querySelector("#groupCode")
            }

            jsonUser = JSON.stringify(user);

            jsUser = JSON.parse(jsonUser);
            console.log(jsUser.firstName + "" + jsUser.lastName + "" + jsUser.userName + "" + jsUser.password);

        })
}