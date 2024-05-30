const Tasks = require('../models/task.model.js') //get the schema

//get all the tasks.
const getTasks = async(req,res) =>{
    try{
        const tasks = await Tasks.find({});
        res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

//get a specific task by ID
const getTask = async(req,res) => {
    try{
        const { id } = req.params;
        const task = await Tasks.findById(id);
        res.status(200).json(task);  //after the task has been found send the json file as response.
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

//post products by name and ID
const postTasks = async(req,res) => {
    try{
        const tasks = await Tasks.create(req.body);  //pass in the raw format of json using middleware.
        res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

//update a product by a specific id.
const updateTasks = async(req,res) => {
    //find the id and pass in the request body.
    try{
        const { id } = req.params;
        const tasks = await Tasks.findById(id , req.body);

        //check if task exist
        if(!tasks){
            res.status(404).json({message : "Task Doesnt Exist"});
        }

        const updatedTask = await Tasks.findById(id);
        res.status(200).json(updatedTask);
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

//deleting a task by the id.
const deleteTask = async(req,res) => {
    try{
        //find the id and delete it.
        const { id } = req.params;
        const task = await Tasks.findByIdAndDelete(id);

        if(!task){
            res.status(404).json({message : "The given task doesnt exist"});
        }

        res.status(200).json({message : "The task has been deleted successfully"});
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

module.exports = {
    getTasks,
    getTask,
    postTasks,
    updateTasks,
    deleteTask
};