const Details = require('../modules/Details')

module.exports.list = (req,res) => {
    const { user } = req
    
    Details.find({user: user._id})
        .then((details) => {
            res.json(details)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const { user } = req
    Promise.all([Details.findOne({_id: id, user: user._id})])
        .then((values) => {
            const [details] = values
            const detailsObj = details.toObject()
            // categoryObj.notes = notes
            res.send(detailsObj)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.create = (req,res) => {
    const { body, user} = req
    body.user = user._id
    const details = new Details(body)
    details.save()
        .then((details) => {
            res.json(details)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body} = req
    Details.findOneAndUpdate({_id: id, user: user._id}, body, {new: true, runValidators: true})
        .then((details) => {
            if(details){
                res.json(details)
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
    Details.findOneAndDelete({_id: id, user: user._id})
        .then((details) => {
            if(details){
                res.json(details)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}