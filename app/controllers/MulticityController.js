const Multicity = require('../modules/Multicity')

module.exports.list = (req,res) => {
    const { user } = req 
    Multicity.find({user: user._id}).populate('driver', ['name']).populate('car', ['model'])
        .then((multicity) => {
            res.json(multicity)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const { user } = req
    Multicity.findOne({_id: id, user: user._id}).populate('driver', ['name']).populate('car', ['model'])
        .then((multicity) => {
            if(multicity){
                res.json(multicity)
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
    const multicity = new Multicity(body)
    multicity.save()
        .then((multicity) => {
            res.json(multicity)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body, user } = req
    Multicity.findOneAndUpdate({_id: id, user: user._id}, body, {new: true, runValidators: true}).populate('driver', ['name']).populate('car', ['model'])
        .then((multicity) => {
            res.json(multicity)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    const { user } = req
    Multicity.findOneAndDelete({_id: id, user: user._id})
        .then((multicity) => {
            if(multicity){
                res.json(multicity)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}