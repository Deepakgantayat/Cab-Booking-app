import React from 'react'
import DriverForm from './Driver'
import {connect} from 'react-redux'
import {startAddDriver} from '../actions/driver'
import {Link} from 'react-router-dom'

function DriverNew(props){
    
   const handleSubmit = (formData) => {
        props.dispatch(startAddDriver(formData, props))
    }
        return(
            <div className="row">
                 <div className="col-md-6">
                    <br/>
                    <br/>
                    <Link to = "/home">Go To Home</Link>
                {/* <img src=""  className="rounded mx-auto d-block"  alt="Responsive"></img> */}
                </div>
                <div className="col-md-6">
                    <br/>
                <h2>New Driver</h2>
                <DriverForm handleSubmit = {handleSubmit}/>
                </div>
                
            </div>
        )
}

export default connect()(DriverNew)