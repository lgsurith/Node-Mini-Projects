//Project 1 - Task Manager.
console.log("Task Manager CRUD operations #1");
const express = require('express');
const Tasks = require('./models/task.model.js');
const mongoose = require('mongoose');
const taskroutes = require('./routes/task.route.js');
const app = express();

//setup the port.
const port = 3000;

mongoose.connect("mongodb+srv://surithofficial:GXQZC0V3pOkdLfUB@backend.ohrtm79.mongodb.net/Task-API?retryWrites=true&w=majority&appName=Backend")
.then(() => {
    console.log("Connected to Mongo DB database");   //give us conformation that the DB has been connected.
})
.catch(() => {
    console.log("Connection Failed");
})

//setup middleware to post details as JSON.
app.use(express.json());
app.use("/api/tasks" , taskroutes);


app.listen(port , () =>{
    console.log("Server is running on 3000");
});

app.get('/' , (req,res) => {
    res.send('Task Manager App Server');
});
