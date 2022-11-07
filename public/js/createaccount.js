
//const fs = require('fs');

window.addEventListener("DOMContentLoaded", buttonListener);


async function buttonListener(){
    let button = document.querySelector("#login");
        button.addEventListener("click", async function(){
            var user = {
                firstName: document.querySelector("#firstName").value,
                lastName: document.querySelector("#lastName").value,
                userName: document.querySelector("#username").value,
                password: document.querySelector("#password").value
            }
            
            jsonUser = JSON.stringify(user);
            document.getElementById("firstName").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            

            // fs.writeFile('users.txt', jsonUser, err => {
            //     if(err){
            //         console.error(err);
            //     }
            //     console.log("file written")
            // });
            console.log(jsonUser);
            jsUser = JSON.parse(jsonUser);
            console.log(jsUser.firstName + "" + jsUser.lastName + "" + jsUser.userName + " " + jsUser.password);

            window.location = "/views/home.html";

        })
}





