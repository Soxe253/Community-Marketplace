let username = localStorage.getItem('Username');//get the logged in users groupcode/username
let groupcode = localStorage.getItem('GroupCode');

document.getElementById('username').value = username;//put them into the hidden inputs on the form to send to server
document.getElementById('groupcode').value = groupcode;

