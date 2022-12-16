

window.addEventListener("DOMContentLoaded", buttonListener);


 async function buttonListener(){
    let button = document.querySelector("#login");
        button.addEventListener("click",  async function(){//receive input from the login form
            var user = {//put login info into a json
                userName: document.querySelector("#username").value,
                password: document.querySelector("#password").value
            }
            console.log(user);
            let body = JSON.stringify(user);
               let response = await fetch('/logingo', {//go to server to get user info and check existence
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: body
                });
                let userInfo= await response.json();//this is all the users info from the user file
            
                //once user is confirmed we fill local storage with their info
            if(userInfo.UserExists){
                    localStorage.setItem('Username', user.userName);
                    localStorage.setItem('Password', user.password);
                    localStorage.setItem('GroupCode',userInfo.GroupCode);
                    localStorage.setItem('Name',userInfo.FirstName +" "+ userInfo.LastName); 
                    window.location = "/home";
                    window.location.href = "/home";
            }
            else{
                window.alert("Wrong Username or Password");
            }
        })
}





