/*
    The most basic Express web server running locally
*/
const express = require("express");
const fs = require('fs');
const bodyParser = require("body-parser"); // If we get data in a POST, this will parse it for us
const { userInfo } = require("os");
const { group } = require("console");

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
    res.sendFile(__dirname + '/views/login.html');
});


app.post("/createaccountgo", (req, res) => {
    let user=req.body;
    let success=true;
    let newUsername="{\"Username\":\""+req.body.Username+"\"";
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
        fs.appendFile(newUser.GroupCode +'/users.txt', (info + "\n"), function(err){
            if(err){
                console.log(err);
                console.log("wrong: error"); 
            }
        })
        fs.appendFile('users.txt', (info + "\n"), function(err){
            if(err){
                console.log(err);
                console.log("wrong: error"); 
            }
        })
        console.log('success');
    res.sendFile(__dirname + '/views/home.html');//send to login if correct
        }
    });
});


app.post("/logingo", (req, res) => {
    let userExists=false;
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
            userExists=true;
            res.sendFile(__dirname + '/views/home.html');//send to home if correct
        }
    })
    
    r.on('close',function(){//at end of users.txt
        if (userExists=false){//if user doesn't exist
        console.log('wrong');
        window.alert("Wrong Username or Password");
        res.sendFile(__dirname + '/views/login.html');//send to login if wrong
        }
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
        postTitle:post.Title,
        postText:post.Description,
        img:post.Image,
        Username: post.Username,
        GroupCode: post.Groupcode,
        score:"0"
    };

    let info = JSON.stringify(newPost);
    console.log("got post");
    fs.appendFile(newPost.GroupCode + '/posts.txt', (info + "\n"), function(err){
        if(err){
            console.log(err);
        }
        console.log("success"); 
    })
    res.sendFile(__dirname + '/views/home.html');
})

// DO NOT DELETE MY CHILD
app.get("/getPosts", (req,res) => {
    console.log("got getPosts");
    fs.readFile('12345/posts.txt', (err, data) => { //THIS IS PERFECT CODE DO NOT CHANGE
        if (err) throw err;
        res.send(data);
    });
})
//THIS IS A THREAT
//Good code. Sends group code back to login.js
    app.post("/getGroupCode", (req,res) => {
        console.log("got to get group code");
        let user = req.body;
        fs.readFile('users.txt', (err,data) => {
            if (err) throw err;
            let newData = data.toString();
            let users = newData.split('\n');
            let i = 0;
            while(i , users.length){
                users = JSON.parse(users[i]);
                if(user.userName === users.Username){
                    return res.send(JSON.stringify(users.GroupCode));
                }
                i++;
            }
        })
    })
    
    
    
    app.post("/imageUpload", (req,res) => {
    
        console.log("image upload worked");
    
    
    
    })

    app.post("/receiveSearchText", (req, res) => {
        let searchText=req.body.search;
        searchText=searchText.toLowerCase();
    const readline=require('readline');
    var r=readline.createInterface({
        input: fs.createReadStream('12345/posts.txt')
    });
    let postsArray=[];
    r.on('line', function (text){//every line of posts.txt
        object=JSON.parse(text);
        object.postTitle=object.postTitle.toLowerCase();
        object.postText=object.postText.toLowerCase();
        postsArray.push(object);
    })
    
    r.on('close',function(){//has made array of post objects
        console.log("go0t to close")
        let i=0;
        const postsLength=postsArray.length;
        while(i<postsLength){
            let points = 0;
        
            if (postsArray[i].postTitle.includes(searchText)) {
                points += 2;
            }
        
            if (postsArray[i].postText.includes(searchText)) {
                points += 1;
            }
            postsArray[i].score=points;
            i++;
        }
        //postsArray.sort((b, a) => a.points - b.points);
        function compare( a, b ) {
            if ( a.score < b.score){
              return 1;
            }
            if ( a.score > b.score ){
              return -1;
            }
            return 0;
          }
          
        postsArray.sort(compare);
        console.log(postsArray);
    let j=0;
    //clear file
    const fs = require('fs');
    fs.truncate('12345/posts.txt', 0, function(){console.log('done')});
    while (j<postsArray.length){
        let newPost=postsArray[j];
        console.log("newPost");
        console.log(newPost);
        newPost.score="0";
        let info = JSON.stringify(newPost);
        //add posts again in new order 
        fs.appendFile('12345/posts.txt', (info + "\n"), function(err){
        if(err){
            console.log(err);
        }
        console.log("success"); 
    })
    j++;
}
    res.sendFile(__dirname + '/views/home.html');
    })
       // res.sendFile(__dirname + '/views/temporarysearchresult.html');
    });

    //array of JSON objects, search trhough array item by item first item is given number 0, if it has the word -1 if it doesn't plus 1
    //index array, if equals 0, equals 1, equals 2, etc., add to array, recreate array 
