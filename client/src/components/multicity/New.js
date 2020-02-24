import React from 'react'
import MulticityForm from './Form'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startAddMulticity} from '../actions/multicity'


function MulticityNew(props){
    
   const handleSubmit = (formData) => {
        props.dispatch(startAddMulticity(formData, props))
    }
        return(
            <div className="row">
                 <div className="col-md-6">
                    <br/>
                    <br/>
                    <Link to="/multicities">Go To Multicity Bookings</Link>
                {/* <img src=""  className="rounded mx-auto d-block"  alt="Responsive"></img> */}
                </div>
                <div className="col-md-6">
                    <br/>
                <h2>New Multicity Trip</h2>
                <MulticityForm handleSubmit = {handleSubmit}/>
                </div>
                
            </div>
        )
}

export default connect()(MulticityNew)