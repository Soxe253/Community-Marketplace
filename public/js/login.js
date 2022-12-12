
//const fs = require('fs');

window.addEventListener("DOMContentLoaded", buttonListener);


async function buttonListener(){
    let button = document.querySelector("#login");
        button.addEventListener("click", async function(){
            var user = {
                userName: document.querySelector("#username").value,
                password: document.querySelector("#password").value
            }
            localStorage.setItem('Username', JSON.stringify(user.userName));
            localStorage.setItem('Password', JSON.stringify(user.password));
            try{
                const response = await fetch('/getPosts', {
                    method: 'GET'
                });
                let groupcode = response.text(); 
                localStorage.setItem('GroupCode', JSON.stringify(groupcode)); 
            }
            
            catch(error){
                console.error(error);
            }
        })
}





