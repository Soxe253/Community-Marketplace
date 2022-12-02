/*
    The most basic Express web server running locally
*/
var logins=[];

const express = require("express");
const fs = require('fs');
const bodyParser = require("body-parser"); // If we get data in a POST, this will parse it for us
const { userInfo } = require("os");

// Creates an Express application: https://expressjs.com/en/4x/api.html#app
// Returns the Express application object
const app = express();
const port = 3000;
// Tell express object where to find your CSS, JS, and images
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
// Register middleware to be used
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
// Route definitions
app.get("/", (req, res) => {
    console.log("got to login");
    res.sendFile(__dirname + '/views/login.html');
});
// Prints the request body so you can see the json data sent in the request
// Sends back a response with the phrase "You did it!" for congratulations
app.post("/postButton", (req, res) => {
    console.log(req.body);
    res.json({ text: "You did it!" });
})
app.get("/cart.png", (req, res) => {
    res.sendFile(__dirname + '/public/img/cart.png');
});
app.get("/grouplogin", (req, res) => {
    console.log("got to group log in")
    res.sendFile(__dirname + '/views/grouplogin.html');
});
app.get("/createaccount", (req, res) => {
    console.log('got to create account');
    res.sendFile(__dirname + '/views/createaccount.html');
});
app.post("/login", (req, res) => {
    console.log('got to log in');
    res.sendFile(__dirname + '/views/home.html');
});
app.get("/search", (req, res) => {
    console.log('got to search');
    res.sendFile(__dirname + '/views/search.html');
});
app.post("/createaccount", (req, res) => {
    console.log(req.body);
    logins.push(req.body);
    console.log("success");
    console.log(logins);
    res.sendFile(__dirname + '/views/grouplogin.html');
});
app.post("/createaccountgo", (req, res) => {
    let success=true;
    let user=req.body;
    let newUsername="{\"Username\":\""+user.Username+"\"";
    console.log(newUsername);
    //start
    const readline=require('readline');
    var r=readline.createInterface({
        input: fs.createReadStream('users.txt')
    });
    r.on('line', function (text){//every line of users.txt
        const userLength=newUsername.length;
        if((text.substring(0,userLength))===newUsername){//if username matches, send to creataccount again
            res.sendFile(__dirname + '/views/createaccount.html');//send to createaccount again if username already exists
            success=false;
        }
    })
    r.on('close',function(){//if username doesn't already exist 
        if(success===true){
        let newUser={
            Username:user.Username,
            Password:user.Password,
            FirstName:user.FirstName,
            LastName:user.LastName,
            GroupCode:user.GroupCode
        };
    
        let info = JSON.stringify(newUser);
        fs.appendFile('users.txt', (info + "\n"), function(err){
            if(err){
                console.log(err);
                console.log("wrong: error"); 
            }
        })
        console.log('success');
    res.sendFile(__dirname + '/views/login.html');//send to login if correct
        }
    })
});

app.post("/logingo", (req, res) => {
    let userInfo = JSON.stringify(req.body);
    userInfo=userInfo.substring(0,((userInfo.length)-1));//take off end bracket of username and password entered
    const readline=require('readline');
    var r=readline.createInterface({
        input: fs.createReadStream('users.txt')
    });
    r.on('line', function (text){//every line of users.txt
        const userLength=userInfo.length;
        if((text.substring(0,userLength))===userInfo){
            console.log('success');
            res.sendFile(__dirname + '/views/home.html');//send to home if correct
}
    })
    
    r.on('close',function(){
        console.log('wrong');
    res.sendFile(__dirname + '/views/login.html');//send to login if wrong
    })
    
});


// starts web server listening on localhost at port 3000
app.listen(port, () => {
    console.log('Listening on port 3000...');
});
//takes user to cart from cart button
app.get("/cart", (req, res) => {
    console.log('got to cart');
    res.sendFile(__dirname + '/views/cart.html');
});
//takes user to homepage from login
app.get("/home", (req, res) => {
    console.log('got to homepage');
    res.sendFile(__dirname + '/views/home.html');
});
app.get("/profile", (req, res) => {
    console.log('got to profile');
    res.sendFile(__dirname + '/views/profile.html');
});
app.get("/post", (req, res) => {
    console.log('got to post');
    res.sendFile(__dirname + '/views/post.html');
});
app.get("/help", (req, res) => {
    console.log('got to help');
    res.sendFile(__dirname + '/views/help.html');
});
app.get("/loginpage", (req, res) => {
    console.log('got to login');
    res.sendFile(__dirname + '/views/login.html');
});
app.post("/newPost", (req, res) => {  //posting request stuff in progress - Jordan
    //console.log(req.body);
    let post=req.body;
    let newPost={
        postText:post.Description,
        img:post.Image
    };

    let info = JSON.stringify(newPost);
    console.log("got post");
    fs.appendFile('community/posts.txt', (info + "\n"), function(err){
        if(err){
            console.log(err);
        }
        console.log("success"); 
    })
    res.sendFile(__dirname + '/views/home.html');
})

app.get("/getPosts", (req,res) => {
    console.log("got getPosts");
    fs.readFile('community/posts.txt', (err, data) => {
        if (err) throw err;
        console.log(data);
        //data = JSON.stringify(data);
        //let postsArray = data.split(/\r?\ n/);
        //console.log(postsArray)
        res.send(data);
    });
   
})
//you're welcome