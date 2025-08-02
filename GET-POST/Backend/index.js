const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

// Middleware to use post request's data
app.use(express.urlencoded({extended:true}))
app.use(express.json)


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/index.html")); // <-- FIXED
});

app.get("/register",(req,res)=>{
    const {username,password} = req.query;
    console.log(`${username} - ${password}`)
    res.send("Standard GET response...");
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("Standard POST response...");
})

app.listen(port,()=>{
    console.log("app is working ...");
})