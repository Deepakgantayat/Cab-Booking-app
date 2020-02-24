import React from 'react'
import {connect} from 'react-redux'
import  _ from 'lodash'
import {Link} from 'react-router-dom'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

 function OnewayShow(props){
        console.log(props.note)
        const id= props.match.params.id
        // const {name,email,mobile} = this.props.customer
        return(
         
          <div className="row">
            <br/>
             <div className="container col-md-4 off-set-3">
              <br/><br/><br/>
             
                {
                    !_.isEmpty(props.oneway) &&(
                      <div>
                        <h2 className="text-light p-1 mb-2" style={{textAlign:"center"}}>Showing Your Oneway Trip On- {props.oneway.date}</h2>
            <Row>
            <Col sm="12">
                <br/>
              <Card body inverse style={{borderColor: '#333'}} className="bg-dark">
                <CardTitle>Travelling From - {props.oneway.from}</CardTitle>
                <CardText>Traveling To - {props.oneway.to}</CardText>
                <CardText>Your Ride - {props.oneway.car.model}</CardText>
                <CardText>Your Driver - {props.oneway.driver.name}</CardText>
                <CardText>Booked For - {props.oneway.details.name}</CardText>
                <Link to = "/oneways" className="link"> Go To Bookings </Link><br/>
                <Link to = {`/oneways/edit/${id}`} className="btn btn-primary"> Edit</Link>  
              </Card>
            </Col>
          </Row>
          </div>
            )
                }  
             </div>
          </div>
           
        )
}

const mapStateToProps = (state, props) => {
    return {
        oneway: state.oneway.find(oneway => oneway._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(OnewayShow)