const express = require("express");
const app = express();
const path = require("path");

app.get("/push", (req,res)=>{
    res.sendFile(path.join(__dirname,"push.html"));
})

app.get("/pop", (req,res)=>{
    res.sendFile(path.join(__dirname,"pop.html"));
})

app.get("/pull", (req,res)=>{
    res.sendFile(path.join(__dirname,"pull.html"));
})



app.listen(3031      ,  ()=>{
    console.log("BACKEND IS ON");
})
