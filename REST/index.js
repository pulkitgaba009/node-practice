const express = require("express");
const path = require("path"); 

const app = express();
app.use(express.urlencoded({extended:true}))

const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send("wtf");
})

// dummy data
let posts = [
    {
        userName:"pulkitgaba0009",
        content:"I love coding"
    },
    {
        userName:"raju",
        content:"I love cricket"
    },
    {
        userName:"aussss",
        content:"I love basketball"
    }
]

// Get route
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})

// first created get request to get the form
app.get("/posts/new",(req,res)=>{
    res.render("newPost.ejs");
})

// Created post API to
app.post("/posts",(req,res)=>{
    let {userName,content} = req.body;
    console.log(userName,content)
    posts.push({userName,content});
    res.redirect("/posts");
})



app.listen(port,()=>{
    console.log(`App is working ${port}`);
})