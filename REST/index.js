const express = require("express");
const path = require("path"); 

const app = express();
app.use(express.urlencoded({extended:true}))

const { v4: uuidv4 } = require('uuid');

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
        id:uuidv4(),
        userName:"pulkitgaba0009",
        content:"I love coding"
    },
    {
        id:uuidv4(),
        userName:"raju",
        content:"I love cricket"
    },
    {
        id:uuidv4(),
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

//Get by id
app.get("/post/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((id)=>id===path.id);
    res.render("show.ejs",{post});
})

app.listen(port,()=>{
    console.log(`App is working ${port}`);
})