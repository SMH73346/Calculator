const express = require("express")

const app = express();
const port = 80;

app.get("/", (req, res)=>{
    res.send("This is my first express app")

});

app.get("/home", (req, res)=>{
    res.send("This is home page of my first express app")

});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app")

});

app.get("/services", (req, res)=>{
    res.send("This is services page of my first express app")

});


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)

}) 