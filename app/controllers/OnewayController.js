const Oneway = require('../modules/Oneway')

module.exports.list = (req,res) => {
    const { user } = req 
    Oneway.find({user: user._id}).populate('driver', ['name']).populate('car', ['model']).populate('details', ['name', 'email', 'phone'])
        .then((oneway) => {
            res.json(oneway)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const { user } = req
    Oneway.findOne({_id: id, user: user._id}).populate('driver', ['name']).populate('car', ['model']).populate('details', ['name', 'email', 'phone'])
        .then((oneway) => {
            if(oneway){
                res.json(oneway)
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
    const oneway = new Oneway(body)
    oneway.save()
        .then((oneway) => {
            res.json(oneway)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body, user } = req
    Oneway.findOneAndUpdate({_id: id, user: user._id}, body, {new: true, runValidators: true}).populate('driver', ['name']).populate('car', ['model']).populate('details', ['name', 'email', 'phone'])
        .then((oneway) => {
            if(oneway){
                res.json(oneway)
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
    Oneway.findOneAndDelete({_id: id, user: user._id})
        .then((oneway) => {
            if(oneway){
                res.json(oneway)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}