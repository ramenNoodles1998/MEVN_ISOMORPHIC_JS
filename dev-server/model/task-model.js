const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: String,
    body: String,
    dueDate: { type: Date, default: Date.now},
    completed: {type: Boolean, default: false},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})
taskSchema.set('timpestamps', true)

module.exports = mongoose.model('task', taskSchema)