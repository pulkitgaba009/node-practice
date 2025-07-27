const express = require("express");
const app = express();

const path = require("path");  // to require path package

const port = 3000 ;

app.set("view engine","ejs");  // view engine sees the views folder in directory
app.set("views",path.join(__dirname,"/views")) // views wala folder (milge yha)

// serve static files
app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/dice",(req,res)=>{
    let data = Math.floor(Math.random() *6 )+1;
    res.render("dice.ejs",{diceValue:data})
})

app.get("/ig/:username",(req,res)=>{
    const {username} = req.params;
    res.render("instagram.ejs",{username});
})

app.listen(port,()=>{
    console.log("Port is working...");
})