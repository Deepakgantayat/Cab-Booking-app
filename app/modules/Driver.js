const mongoose = require('mongoose')

const Schema = mongoose.Schema
const DriverSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type : String,
        required: true
    },
    experience: {
        type : String,
        required: true
    },
    languages: [
        {
            type: String,
            reuired: true
        }
    ],
    adharcard: {
        type: String,
        required: true,
        minlength: 12,
        maxlength: 12
    },
    user: {
        type: Schema.Types.ObjectId
    }
})

const Driver = mongoose.model('Driver', DriverSchema)

module.exports = Driver