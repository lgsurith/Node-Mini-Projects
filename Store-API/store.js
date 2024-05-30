require('dotenv').config()
require('express-async-errors')

console.log("Store API");
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//setup middleware.
app.use(express.json());

//routes
app.get('/' , (req,res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/prodcuts">Product Route</a>');
})

const port = 3000;

mongoose.connect(process.env.MONGO_DB)
.then(() => {
    console.log("Connected to Mongo DB database");   //give us conformation that the DB has been connected.
})
.catch(() => {
    console.log("Connection Failed");
})

app.listen(port , () => {
    try{
    console.log(`Server is running ${port}`)  //using backticks (``) will format the string.
    }
    catch(error){
        console.log(error);
    }
});
