const express = require('express');
const Tasks = require('../models/task.model.js');
const router = express.Router();
const { getTasks, getTask , postTasks, updateTasks, deleteTask} = require('../controllers/tasks.controller.js');

//GET Functions
router.get('/',getTasks);
router.get('/:id',getTask);

//POST Functions
router.post('/' , postTasks);

//PATCH or PUT Functions
router.put('/:id',updateTasks);

//DELETE Functions
router.delete('/:id' , deleteTask);

//make sure to export to ensure you do not get an middleware error.
module.exports = router;