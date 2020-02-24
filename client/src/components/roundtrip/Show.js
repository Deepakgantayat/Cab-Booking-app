import React from 'react'
import {connect} from 'react-redux'
import  _ from 'lodash'
import {Link} from 'react-router-dom'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

 function RoundtripShow(props){
        console.log(props.note)
        const id= props.match.params.id
        // const {name,email,mobile} = this.props.customer
        return(
          <div className="row">
          <br/>
           <div className="container col-md-4 off-set-3">
            <br/><br/><br/>
            {
           !_.isEmpty(props.roundtrip) &&(
            <div>
            <h2 className="text-light p-2 mb-3" style={{textAlign:"center"}}>Showing Your Roundtrip On- {props.roundtrip.startdate}</h2>
            <Row>
            <Col sm="12">
                <br/>
              <Card body inverse style={{borderColor: '#333'}} className="bg-dark">
                <CardTitle>Travelling From - {props.roundtrip.from}</CardTitle>
                <CardText>Traveling To - {props.roundtrip.to}</CardText>
                <CardTitle>Trip Ends On - {props.roundtrip.enddate}</CardTitle>
                <CardText>Your Ride - {props.roundtrip.car.model}</CardText>
                <CardText>Your Driver - {props.roundtrip.driver.name}</CardText>
                <CardText>Booked For - {props.roundtrip.details.name}</CardText>
                <Link to = "/roundtrips" className="link"> Go To Bookings</Link><br/>
                <Link to = {`/roundtrips/edit/${id}`} className="btn btn-primary"> Edit</Link>  
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
        roundtrip: state.roundtrips.find(roundtrip => roundtrip._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(RoundtripShow)