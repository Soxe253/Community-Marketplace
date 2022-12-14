
//const fs = require('fs');

window.addEventListener("DOMContentLoaded", buttonListener);


 async function buttonListener(){
    let button = document.querySelector("#login");
        button.addEventListener("click",  async function(){
            var user = {
                userName: document.querySelector("#username").value,
                password: document.querySelector("#password").value
            }
            localStorage.setItem('Username', JSON.stringify(user.userName));
            localStorage.setItem('Password', JSON.stringify(user.password));
           let body = JSON.stringify(user);
           console.log(body);         
                let response = await fetch('/getUserInfo', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: body
                });
                let groupCode = await response.text();
                localStorage.setItem('GroupCode', groupCode);
            
        })
}





