const express = require('express')
const router = express.Router()
const taskController = require('./tasks-controller.js')


router.post('/task', taskController.create)
router.get('/task', taskController.index)
router.get('/task/:id', taskController.show)
router.put('/task', taskController.update)
router.delete('/task', taskController.remove)

module.exports = router