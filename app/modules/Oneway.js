const mongoose = require('mongoose')

const Schema = mongoose.Schema
const onewaySchema = new Schema({
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
    // pickup: {
    //     type: String,
    //     required: true
    // },
    // drop: {
    //     type: String,
    //     required: true
    // },
    user: {
        type: Schema.Types.ObjectId
    }
})

const Oneway = mongoose.model('Oneway', onewaySchema)

module.exports = Oneway