const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine","ejs");
app.set(path.join(__dirname,"/views"));

app.get("/instagram/:username",(req,res)=>{
    let instadata = require("./instaData.json")
    let {username} = req.params;
    let data = instadata[username]
    res.render("instagram.ejs",{data});
})

app.listen(port,(req,res)=>{
    console.log("App is working ...")
})