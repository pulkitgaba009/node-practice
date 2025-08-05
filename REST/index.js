const express = require("express");
const path = require("path"); 

const app = express();
app.use(express.urlencoded({extended:true}))

const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));

app.use((req,res)=>{
    res.send("wtf")
})

app.listen(port,()=>{
    console.log(`App is working ${port}`);
})