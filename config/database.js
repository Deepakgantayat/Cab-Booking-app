const mongoose = require('mongoose')

const configureDB =  () => {
    mongoose.Promise = global.Promise
    const CONNECTION_URI= process.env.MONGODB_URI || 'mongodb://localhost:27017/instacar'
    mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    // mongoose.connect('mongodb://localhost:27017/instacar', { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Connected to database')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDB