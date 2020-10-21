const taskRoutes = require('./api/task/tasks-routes.js')
const registerRoutes = require('./api/register/register-routes.js')
const authRoutes = require('./api/auth/auth-routes.js')
const userRoutes = require('./api/user/user-routes.js')

exports.registerRoutes = (app) => {
    app.use('/api', taskRoutes)
    app.use('/api', registerRoutes)
    app.use('/api', authRoutes)
    app.use('/api', userRoutes)
}