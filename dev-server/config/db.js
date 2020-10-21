const mongoose = require('mongoose')

exports.connectToDB = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, 
    error => {
        if(error) {
            console.log('unable to conncect to database')
            throw error
        } else {
            console.log('connected to database')
        }    
    })
}