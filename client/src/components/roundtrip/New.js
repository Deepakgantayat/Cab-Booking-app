import React from 'react'
import RoundtripForm from './Form'
import {connect} from 'react-redux'
import {startAddRoundtrip} from '../actions/roundtrip'
import {Link} from 'react-router-dom'


function RoundtripNew(props){
    
   const handleSubmit = (formData) => {
        props.dispatch(startAddRoundtrip(formData, props))
    }
        return(
            <div className="row">
                 <div className="col-md-6">
                    <br/>
                    <br/>
                    <Link to = "/roundtrips">Go To Bookings</Link>
                {/* <img src=""  className="rounded mx-auto d-block"  alt="Responsive"></img> */}
                </div>
                <div className="col-md-6">
                    <br/>
                <h2>New Roun Trip</h2>
                <RoundtripForm handleSubmit = {handleSubmit}/>
                </div>
                
            </div>
        )
}

export default connect()(RoundtripNew)