let username = localStorage.getItem('Username');
console.log(username);
const text = document.createTextNode(username.substring(1, username.length - 1));
document.getElementById("username").appendChild(text);
