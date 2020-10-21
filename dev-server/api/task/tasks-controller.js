const User = require('../../model/user-model')
const Task = require('../../model/task-model')
const moment = require('moment')
const auth = require('../../services/auth-services')

exports.index = (req, res) => {
    //find all tasks
    Task.find({}, (error, tasks) => {
        if(error) {
            return res.status(500).json()
        }

        return res.status(200).json({tasks: tasks})
    }).populate('author', 'username', 'user')
}

exports.create = (req, res) => {
    //create task
    const id = auth.getUserId(req)

    User.findOne({_id: id}, (error, user) => {
        if(error && !user) {
            return res.status(500).json()
        }

        const task = new Task(req.body)
        task.author = user._id
        task.dueDate = moment(task.dueDate)

        task.save(error => {
            if(error) {
                return res.status(500).json()
            }

            return res.status(201).json()
        })
    })

    return res.status(201).json()
}

exports.update = (req, res) => {
    //for updating tasks
    const id = auth.getUserId(req)

    User.findOne({_id: id}, (error, user) => {
        if(error) {
            return res.status(500).json()
        }
        if(!user) {
            return res.status(404).json()
        }

        const task = new Task(req.body.task)
        task.author = user._id
        task.dueDate = moment(task.dueDate)
        Task.findByIdAndUpdate({_id: task._id}, (task, error) => {
            if(error) {
                return res.status(500).json()
            }

            return res.status(204).json()
        })
    })
}

exports.remove = (req, res) => {
    //removing task
    const id = auth.getUserId(req)

    Task.findOne({_id: req.params.id}, (error, task) => {
        if(error) {
            return res.status(500).json()
        }
        if(!task) {
            return res.status(404).json()
        }
        if(task.author._id.toString() !== id) {
            return res.status(403).json({message: 'no allowed to delete other users task'})
        }
        Task.deleteOne({_id: req.params.id}, (error) => {
            if(error) {
                return res.status(500).json()
            }
            return res.status(204).json()
        })
    })
}

exports.show = (req, res) => {
    //get task by id
    console.log(req.params.id)
    Task.findOne({_id: req.params.id}, (error, task) => {
        if(error) {
            return res.status(500).json()
        }
        if(!task) {
            return res.status(400).json()
        }

        console.log(task)
        return res.status(200).json({task: task})
    })
}