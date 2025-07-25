// boilerplate code
const express = require("express");
const app = express();

const port = 3000;

// // use the base route
// app.use((req,res)=>{
//     console.log("new incoming request");
//     res.send("App is working")
// })

// to perform routing : making own routes : performing tasks on those particular tasks
app.get("/apple",(req,res)=>{
    res.send({
        name:"apple",
        color:"red"
    })
})

// // wildcard
// app.use((req, res) => {
//   res.status(404).send("Not working");
// });

//to get parameters
app.get ("/:username/:id",(req,res)=>{
    console.log(req.params);
    let {username,id} = req.params;

    res.send(`Welcome ${username}`);
    console.log(id);
})

// query strings
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("no results")
})

// listen to the port
app.listen(port,()=>{
    console.log("App is working ... ")
})