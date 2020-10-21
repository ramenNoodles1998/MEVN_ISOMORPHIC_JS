const express = require('express')
const router = express.Router()
const taskController = require('./tasks-controller.js')
const auth = require('../../services/auth-services.js')

router.post('/task', auth.requireLogin, taskController.create)
router.get('/task', auth.requireLogin, taskController.index)
router.get('/task/:id', auth.requireLogin, taskController.show)
router.put('/task', auth.requireLogin, taskController.update)
router.delete('/task/:id', auth.requireLogin, taskController.remove)

module.exports = router