const Airport = require('../modules/Airport')

module.exports.list = (req,res) => {
    const { user } = req 
    Airport.find({user: user._id}).populate('driver', ['name']).populate('car', ['model']).populate('details', ['name', 'email', 'phone'])
        .then((airport) => {
            res.json(airport)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const { user } = req
    Airport.findOne({_id: id, user: user._id}).populate('driver', ['name']).populate('car', ['model']).populate('details', ['name', 'email', 'phone'])
        .then((airport) => {
            if(airport){
                res.json(airport)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req,res) => {
    const { body, user } = req
    body.user = user._id
    const airport = new Airport(body)
    airport.save()
        .then((airport) => {
            res.json(airport)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body, user } = req
    Airport.findOneAndUpdate({_id: id, user: user._id}, body, {new: true, runValidators: true}).populate('driver', ['name']).populate('car', ['model']).populate('details', ['name', 'email', 'phone'])
        .then((airport) => {
            if(airport){
                res.json(airport)
            } else {
                res,json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    const { user } = req
    Airport.findOneAndDelete({_id: id, user: user._id})
        .then((airport) => {
            if(airport){
                res.json(airport)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}