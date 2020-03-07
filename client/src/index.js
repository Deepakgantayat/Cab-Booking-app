import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App';

import 'bootstrap/dist/css/bootstrap.css'

import configureStore from './components/store/configureStore'

import {startSetOneways} from './components/actions/oneway'
// import {startSetNotes} from './components/actions/notes'
import {startGetUser} from './components/actions/users'
import {startSetDetails} from './components/actions/details'
import {startSetDrivers} from './components/actions/driver'
import {startSetCars} from './components/actions/car'
import {startSetRoundtrips} from './components/actions/roundtrip'
import {startSetMulticities} from './components/actions/multicity'
import {startSetAirports} from './components/actions/Airport'

const store = configureStore()

console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

//handle all page reloads, and also get the initial data from the server to store it in the redux store
if(localStorage.getItem('authToken')) {
    // store.dispatch(startSetCategories())
    // store.dispatch(startSetNotes())
    store.dispatch(startGetUser())
    store.dispatch(startSetOneways())
    store.dispatch(startSetDetails())
    store.dispatch(startSetDrivers())
    store.dispatch(startSetCars())
    store.dispatch(startSetRoundtrips())
    store.dispatch(startSetMulticities())
    store.dispatch(startSetAirports())
}
const ele = (

    <Provider store = {store}>
        <App/>
    </Provider>

)

ReactDOM.render(ele, document.getElementById('root'));