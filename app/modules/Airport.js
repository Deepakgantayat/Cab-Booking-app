const mongoose = require('mongoose')

const Schema = mongoose.Schema
const airportSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    // price: {
    //     type: String,
    //     required: true
    // },
    trip: {
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

const Airport = mongoose.model('Airport', airportSchema)

module.exports = Airport