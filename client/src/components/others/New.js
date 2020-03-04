import React from 'react'
import CarForm from './Car'
import {connect} from 'react-redux'
import {startAddCar} from '../actions/car'
import {Link} from 'react-router-dom'

function CarNew(props){
    
   const handleSubmit = (formData) => {
        props.dispatch(startAddCar(formData, props))
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
                <h2>New car</h2>
                <CarForm handleSubmit = {handleSubmit}/>
                </div>
                
            </div>
        )
}

export default connect()(CarNew)