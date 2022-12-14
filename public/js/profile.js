let username = localStorage.getItem('Username');
console.log(username);
const textuser = document.createTextNode(username.substring(1, username.length - 1));
document.getElementById("username").appendChild(textuser);
let groupcode = localStorage.getItem('GroupCode');
console.log(groupcode);
const textcode = document.createTextNode(groupcode.substring(1, groupcode.length - 1));
document.getElementById("groupcode").appendChild(textcode);
let profilename = localStorage.getItem('Name');
console.log(profilename);
const textname = document.createTextNode(profilename);
document.getElementById("name").appendChild(textname);

