const express = require('express')
const router = express.Router()

const usersController = require('../app/controllers/UsersController')
const driversController = require('../app/controllers/DriversController')
const carController = require('../app/controllers/CarsController')
const onewayController = require('../app/controllers/OnewayController')
const roundtripController = require('../app/controllers/RoundtripController')
const multicityController = require('../app/controllers/MulticityController')
const detailsController = require('../app/controllers/DetailsController')
const airportController = require('../app/controllers/AirportsController')
// const distanceController = require('../app/controllers/DistanceController')

const { authenticateUser } = require('../app/middlewares/authentication')
// const {upload} = require('../app/middlewares/multer' )

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout', authenticateUser, usersController.logout)

router.get('/cars', carController.list)
// router.get('/cars/count', authenticateUser, notesController.count)
router.get('/cars/:id', carController.show)
router.post('/cars', authenticateUser, carController.create) //upload.single('picture')
router.put('/cars/:id', authenticateUser, carController.update) //, upload.single('picture')
router.delete('/cars/:id', authenticateUser, carController.destroy)

router.get('/drivers', driversController.list)
router.get('/drivers/:id', driversController.show)
router.post('/drivers', authenticateUser, driversController.create)
router.put('/drivers/:id', authenticateUser, driversController.update)
router.delete('/drivers/:id', authenticateUser, driversController.destroy)

router.get('/details', authenticateUser, detailsController.list)
router.get('/details/:id',authenticateUser,  detailsController.show)
router.post('/details', authenticateUser,  detailsController.create)
router.put('/details/:id',authenticateUser, detailsController.update)
router.delete('/details/:id', authenticateUser, detailsController.destroy)

router.get('/oneways',authenticateUser, onewayController.list)
router.get('/oneways/:id', authenticateUser, onewayController.show)
router.post('/oneways', authenticateUser, onewayController.create)
router.put('/oneways/:id', authenticateUser, onewayController.update)
router.delete('/oneways/:id', authenticateUser, onewayController.destroy)

router.get('/roundtrips', authenticateUser, roundtripController.list)
router.get('/roundtrips/:id', authenticateUser, roundtripController.show)
router.post('/roundtrips', authenticateUser, roundtripController.create)
router.put('/roundtrips/:id', authenticateUser, roundtripController.update)
router.delete('/roundtrips/:id', authenticateUser, roundtripController.destroy)

router.get('/multicities', authenticateUser, multicityController.list)
router.get('/multicities/:id', authenticateUser, multicityController.show)
router.post('/multicities', authenticateUser, multicityController.create)
router.put('/multicities/:id', authenticateUser, multicityController.update)
router.delete('/multicities/:id', authenticateUser, multicityController.destroy)

router.get('/airports',authenticateUser, airportController.list)
router.get('/airports/:id', authenticateUser, airportController.show)
router.post('/airports', authenticateUser, airportController.create)
router.put('/airports/:id', authenticateUser, airportController.update)
router.delete('/airports/:id', authenticateUser, airportController.destroy)


// router.get('/getdistance',distanceController.distance)

module.exports = router