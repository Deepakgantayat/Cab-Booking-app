import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import {startEditAirport} from '../actions/Airport'
import AirportForm from './Form'


function AirportEdit(props){

   const handleSubmit = (formData) => {
        props.dispatch(startEditAirport(formData, props))
    }
        return(
            <div className= "row">
                <div className="col-md-6">
                    <br/>
                    <br/>
                    <Link to = "/airports">Go To Bookingd</Link>
                {/* <img src=""  className="rounded mx-auto d-block"  alt="Responsive"></img> */}
                </div>
                <div className="col-md-6">
                    <br/>
                {
                    !_.isEmpty(props.airport) &&(
                        <div>
                             <h2> Travel Data - {props.airport.from} - {props.airport.to}</h2>
                                {Object.keys(props.airport).length !== 0 && <AirportForm {...props.airport}
                                handleSubmit = {handleSubmit}/>}
                        </div>
                    )
                }     
                </div>
                
            </div>
        )
}

const mapStateToProps = (state, props)=> {
    return {
        airport: state.airports.find(ele => ele._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(AirportEdit)