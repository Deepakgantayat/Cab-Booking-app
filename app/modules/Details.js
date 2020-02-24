const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema
const DetailsSchema = new mongoose.Schema({
   name: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(email){
                return validator.isEmail(email)
            },
            message: function(){
                return 'Provide a valid email'
            }
        }
    },
    user: {
        type: Schema.Types.ObjectId
    }
})

const Details = mongoose.model('Details', DetailsSchema)

module.exports = Details