
//const fs = require('fs');

window.addEventListener("DOMContentLoaded", buttonListener);


async function buttonListener(){
    let button = document.querySelector("#createAccount");
        button.addEventListener("click", async function(){
            var user = {
                Username: document.querySelector("#username").value,
                Password: document.querySelector("#password").value,
                FirstName: document.querySelector("#firstName").value,
                LastName: document.querySelector("#lastName").value,
                GroupCode: document.querySelector("#groupCode").value
            }

            let jsonUser = JSON.stringify(user);
            let response = await fetch('/createaccountgo', {//go to server to get user info and check existence
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonUser
            });
            let answer = await response.json();
                if(answer){
                    localStorage.setItem('Username',user.Username);
                    localStorage.setItem('Password',user.Password);
                    localStorage.setItem('GroupCode',user.GroupCode);
                    localStorage.setItem('Name',user.FirstName +" "+ user.LastName)
                    window.location = "/home";
                    window.location.href = "/home";
                }
                else{
                    window.location = "/";
                    window.location.href = "/";
                }
            //console.log(jsUser.firstName + "" + jsUser.lastName + "" + jsUser.userName + "" + jsUser.password);

        })
}