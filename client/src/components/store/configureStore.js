import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/users'
import onewayReducer from '../reducers/oneway'
import carReducer from '../reducers/car'
import driverReducer from '../reducers/driver'
import detailReducer from '../reducers/details'
import roundtripReducer from '../reducers/roundtrip'
import multicityReducer from '../reducers/multicity'
import airportReducer from '../reducers/Airport'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        oneway: onewayReducer,
        cars: carReducer,
        drivers: driverReducer,
        details: detailReducer,
        roundtrips : roundtripReducer,
        multicities: multicityReducer,
        airports: airportReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore