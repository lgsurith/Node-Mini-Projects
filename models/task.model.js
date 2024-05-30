//initiate mongo db 
const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema(
    {
        name :{
            type : String,
            required : true
        },
        TaskId : {
            type : Number,
            required : true,
        }
    },
    {
        timestamps : true //indicates when an object was created.
    }
);

const Task = mongoose.model("Tasks" , TaskSchema);
module.exports = Task;