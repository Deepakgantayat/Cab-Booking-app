const mongoose = require('mongoose')

const Schema = mongoose.Schema
const multicitySchema = new Schema({
    from: {
        type: String,
        required: true
    },
    cities: [
        {
            type: String,
            reuired: true
        }
    ],
    startdate: {
        type: String,
        required: true
    },
    enddate: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    car: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Car'
    },
    driver: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Driver'
    },
    details: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Details'
    },
    user: {
        type: Schema.Types.ObjectId
    }
})

const Multicity = mongoose.model('Multicity', multicitySchema)

module.exports = Multicity