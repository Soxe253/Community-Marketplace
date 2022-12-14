
//const fs = require('fs');

window.addEventListener("DOMContentLoaded", buttonListener);


 async function buttonListener(){
    let button = document.querySelector("#login");
        button.addEventListener("click",  async function(){
            var user = {
                userName: document.querySelector("#username").value,
                password: document.querySelector("#password").value
            }
            
            localStorage.setItem('Username', user.userName);
            localStorage.setItem('Password', user.password);
           let body = JSON.stringify(user);
           console.log(body);         
                    let response = await fetch('/getUserInfo', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: body
                    }); 
                    let userInfo = await response.json();
                    //let groupCode = await response.text();
                    console.log(userInfo);
                localStorage.setItem('GroupCode',userInfo.GroupCode);
                localStorage.setItem('Name',userInfo.FirstName +" "+ userInfo.LastName); 
        })
}





