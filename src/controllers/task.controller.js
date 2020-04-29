const Task = require('../models/task');

module.exports = {
    getTasks: async (req, res) => {
        const tasks = await Task.find();
        console.log(tasks);
        res.send(tasks);
    },

    getTask: async (req, res) => {
        const id = req.params.id;
        const task = await Task.findById(id);
        
        res.send(task);  
    },

    save: async (req, res) => {
        const { title, description } = req.body;
        const task = new Task({
            title,
            description,
        });
        await task.save();
        res.json({
            status: 'Task saved!',
        });
    },

    update: async (req, res) => {
        const {title, description} = req.body;
        const newTask = { 
            title,
            description,
        }
        const id = req.params.id;
        await Task.findByIdAndUpdate(id, newTask);
        res.json({
            status: 'Task updated!'
        });
    },

    delete: async (req, res) => {
        const id = req.params.id;
        await Task.findByIdAndDelete(id);
        res.json({
            status: 'Task deleted!'
        });
    }
}


