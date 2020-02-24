const mongoose = require('mongoose')

const Schema = mongoose.Schema
const CarSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    capacity: {
        type : String,
        required: true
    },
    safetybag: {
        type : String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId
    }
})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car