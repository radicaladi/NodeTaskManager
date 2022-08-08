const Task = require('../models/tasks');
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}); // gets all documents (rows) in tasks collection (table)
        res.status(200).json({ tasks }) //es6 shortened since variable for value and parameter are exact same
    } catch (error) {
        res.status(500).json({ msg:error })
    }
}


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }
    catch (error) {
        res.status(500).json({ msg: error})
    }
}

const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if (!task) {
            return res.status(404).json({ msg:`No task with id : ${taskID}`})  // always setup return to ensure doesn't send task twice
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task) {
            return res.status(404).json({ msg:`No task with id : ${taskID}`})  // always setup return to ensure doesn't send task twice
        }
        res.status(200).json({ task }); //this line is to see result in postman
    } catch (error){
       res.status(500).json({ msg: error });
    }
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}