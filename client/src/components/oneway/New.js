import React from 'react'
import OnewayForm from './Nform'
import {connect} from 'react-redux'
import {startAddOneway} from '../actions/oneway'
import {Link} from 'react-router-dom'

function OnewayNew(props){
    
   const handleSubmit = (formData) => {
        props.dispatch(startAddOneway(formData, props))
    }
        return(
            <div className="row">
                 <div className="col-md-6">
                    <br/>
                    <br/>
                    <Link to = "/oneways">Go To Bookings</Link>
                {/* <img src=""  className="rounded mx-auto d-block"  alt="Responsive"></img> */}
                </div>
                <div className="col-md-6">
                    <br/>
                <h2>New Oneway Trip</h2>
                <OnewayForm handleSubmit = {handleSubmit}/>
                </div>
                
            </div>
        )
}

export default connect()(OnewayNew)