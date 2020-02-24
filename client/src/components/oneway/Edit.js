import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import {startEditOneway} from '../actions/oneway'
import OnewayForm from './Nform'


function OnewayEdit(props){

   const handleSubmit = (formData) => {
        props.dispatch(startEditOneway(formData, props))
    }
        return(
            <div className= "row">
                <div className="col-md-6">
                    <br/>
                    <br/>
                    <Link to = "/oneways">Go To Bookingd</Link>
                {/* <img src=""  className="rounded mx-auto d-block"  alt="Responsive"></img> */}
                </div>
                <div className="col-md-6">
                    <br/>
                {
                    !_.isEmpty(props.oneway) &&(
                        <div>
                             <h2> Travel Data - {props.oneway.from} - {props.oneway.to}</h2>
                                {Object.keys(props.oneway).length !== 0 && <OnewayForm {...props.oneway}
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
        oneway: state.oneway.find(ele => ele._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(OnewayEdit)