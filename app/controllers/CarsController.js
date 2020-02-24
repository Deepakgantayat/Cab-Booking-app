const Car = require('../modules/Car')

module.exports.list = (req,res) => {
    // const { user } = req
    
    Car.find()
        .then((car) => {
            res.json(car)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    // const { user } = req
    Promise.all([Car.findOne({_id: id})])
        .then((values) => {
            const [car] = values
            const carObj = car.toObject()
            // categoryObj.notes = notes
            res.send(carObj)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.create = (req,res) => {
    const { body, user } = req
    body.user = user._id
    const car = new Car(body)
    car.save()
        .then((car) => {
            res.json(car)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body, user } = req
    Car.findOneAndUpdate({_id: id, user: user._id}, body, {new: true, runValidators: true})
        .then((car) => {
            if(car){
                res.json(car)
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
    Car.findOneAndDelete({_id: id, user: user._id})
        .then((car) => {
            if(car){
                res.json(car)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}