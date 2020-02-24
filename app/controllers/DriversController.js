const Driver = require('../modules/Driver')

module.exports.list = (req,res) => {
    // const { user } = req
    
    Driver.find()
        .then((driver) => {
            res.json(driver)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    // const { user } = req
    Promise.all([Driver.findOne({_id: id})])
        .then((values) => {
            const [driver] = values
            const driverObj = driver.toObject()
            // categoryObj.notes = notes
            res.send(driverObj)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.create = (req,res) => {
    const { body, user } = req
    body.user = user._id
    const driver = new Driver(body)
    driver.save()
        .then((driver) => {
            res.json(driver)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body, user } = req
    Driver.findOneAndUpdate({_id: id, user: user._id}, body, {new: true, runValidators: true})
        .then((driver) => {
            if(driver){
                res.json(driver)
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
    Driver.findOneAndDelete({_id: id, user: user._id})
        .then((driver) => {
            if(driver){
                res.json(driver)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}