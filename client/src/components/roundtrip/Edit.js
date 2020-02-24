import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import {startEditRoundtrip} from '../actions/roundtrip'
import RoundtripForm from './Form'


function RoundtripEdit(props){

   const handleSubmit = (formData) => {
        props.dispatch(startEditRoundtrip(formData, props))
    }
        return(
            <div className= "row">
                <div className="col-md-6">
                    <br/>
                    <br/>
                    <Link to= "/roundtrips">Go To Booking</Link>
                {/* <img src=""  className="rounded mx-auto d-block"  alt="Responsive"></img> */}
                </div>
                <div className="col-md-6">
                    <br/>
                {
                    !_.isEmpty(props.roundtrip) &&(
                        <div>
                             <h2> Travel Data - {props.roundtrip.from} - {props.roundtrip.to}</h2>
                                {Object.keys(props.roundtrip).length !== 0 && <RoundtripForm {...props.roundtrip}
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
        roundtrip: state.roundtrips.find(roundtrip => roundtrip._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(RoundtripEdit)