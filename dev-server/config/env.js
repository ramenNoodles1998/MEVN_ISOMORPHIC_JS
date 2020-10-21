const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

exports.setEnvironment = (app) => {
    if(process.env.NODE_ENV != 'production') {
        setDevEnv(app)
    } else {
        console.log('here')
        setProdEnv(app)
    }
}

function setDevEnv(app) {
    process.env.NODE_ENV = 'development'
    process.env.DB_URL = 'mongodb://localhost:27017/vue-db'
    console.log('setting development environment')
    app.use(bodyParser.json())
    app.use(morgan('dev'))
    app.use(cors())
}

function setProdEnv(app) {
    process.env.NODE_ENV = 'production'
    process.env.DB_URL = 'mongodb://localhost:27017/prod-db'
    console.log('setting production enviroment')
    app.use(express.static(__dirname + '/../dist'))
    app.use(bodyParser.json())
}