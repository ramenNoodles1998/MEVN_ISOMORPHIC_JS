const express = require('express')
const { setEnvironment } = require('./config/env.js')
const { registerRoutes } = require('./routes.js')
const { connectToDB } = require('./config/db.js')
const app = express()
const port = 3000

setEnvironment(app)
connectToDB()
registerRoutes(app)

app.get('/', (req, res) => {
    if(process.env.NODE_ENV !== 'production') {
        return res.send('Running server in development mode!')
    } else {
        return res.sendFile('index.html', {root: __dirname + '/../dist/'})
    }
})

app.listen(port, () => {
  console.log(`MEVN app listening at http://localhost:${port} in ${process.env.NODE_ENV}`)
})