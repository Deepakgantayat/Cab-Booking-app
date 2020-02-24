import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import {startEditMulticity} from '../actions/multicity'
import MulticityForm from './Form'


function MulticityEdit(props){

   const handleSubmit = (formData) => {
        props.dispatch(startEditMulticity(formData, props))
    }
        return(
            <div className= "row">
                <div className="col-md-6">
                    <br/>
                    <br/>
                    <Link to = "/multicities">Go To MultiCity Bookings</Link>
                {/* <img src=""  className="rounded mx-auto d-block"  alt="Responsive"></img> */}
                </div>
                <div className="col-md-6">
                    <br/>
                {
                    !_.isEmpty(props.multicity) &&(
                        <div>
                             <h2> Travel Data - {props.multicity.from} - {props.multicity.cities[0]}</h2>
                                {Object.keys(props.multicity).length !== 0 && <MulticityForm {...props.multicity}
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
        multicity: state.multicities.find(multicity => multicity._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(MulticityEdit)