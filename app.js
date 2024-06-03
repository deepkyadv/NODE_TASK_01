const express =require("express");
const http = require("http");
//onst bodyparser = require(bodyParser);
const path = require("path");
require("./db/conn");
const User = require("./models/user");
const bodyParser = require("body-parser");


const app = express();
const myserver = http.createServer(app);



app.use(express.json())

// CREATING USER API AND STORED IN DB
app.post("/create", async (req,res)=>{
    const data = new User(req.body);
    const result = await data.save()
    console.log(req.body);
    console.log(result);
    res.send(result);
    console.log("inserted");
})

// GET REQUEST TO FETCH USER
app.get('/fetch_data', async (req, res)=>{
    try {
        const users = await User.find({})
    console.log("fetched users", users);
    res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });

        
    }
})

//STATIC FILES
app.use(express.static(path.join(__dirname, 'views')));


//SERVE HTML FILE
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));

    
})

myserver.listen(4100, ()=>{
    console.log("server connected")
})

module.exports = app;


