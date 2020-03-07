import React from 'react'
import AirportForm from './Form'
import {connect} from 'react-redux'
import {startAddAirport} from '../actions/Airport'
import {Link} from 'react-router-dom'

function AirportNew(props){
    
   const handleSubmit = (formData) => {
        props.dispatch(startAddAirport(formData, props))
    }
        return(
            <div className="row">
                 <div className="col-md-6">
                    <br/>
                    <br/>
                    <Link to = "/airports">Go To Bookings</Link>
                {/* <img src=""  className="rounded mx-auto d-block"  alt="Responsive"></img> */}
                </div>
                <div className="col-md-6">
                    <br/>
                <h2>New Airport Trip</h2>
                <AirportForm handleSubmit = {handleSubmit}/>
                </div>
                
            </div>
        )
}

export default connect()(AirportNew)