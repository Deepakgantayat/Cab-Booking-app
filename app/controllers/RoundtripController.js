const Roundtrip = require('../modules/Roundtrip')

module.exports.list = (req,res) => {
    const { user } = req 
    Roundtrip.find({user: user._id}).populate('driver', ['name']).populate('car', ['model'])
        .then((roundtrip) => {
            res.json(roundtrip)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const { user } = req
    Roundtrip.findOne({_id: id, user: user._id}).populate('driver', ['name']).populate('car', ['model'])
        .then((roundtrip) => {
            if(roundtrip){
                res.json(roundtrip)
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
    const roundtrip = new Roundtrip(body)
    roundtrip.save()
        .then((roundtrip) => {
            res.json(roundtrip)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body, user } = req
    Roundtrip.findOneAndUpdate({_id: id, user: user._id}, body, {new: true, runValidators: true}).populate('driver', ['name']).populate('car', ['model'])
        .then((roundtrip) => {
            if(roundtrip){
                res.json(roundtrip)
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
    Roundtrip.findOneAndDelete({_id: id, user: user._id})
        .then((roundtrip) => {
            if(roundtrip){
                res.json(roundtrip)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}