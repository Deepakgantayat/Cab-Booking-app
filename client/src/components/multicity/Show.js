import React from 'react'
import {connect} from 'react-redux'
import  _ from 'lodash'
import {Link} from 'react-router-dom'
import { Card, CardTitle, CardText, Row, Col, Button } from 'reactstrap';

 function MulticityShow(props){
        console.log(props.note)
        const id= props.match.params.id
        // const {name,email,mobile} = this.props.customer
      const findDirection = () => {
          let city = props.multicity.from
          let url = `https://www.google.com/maps/place/${city}`;
          window.open(url);
        }

        return(
          <div className="row">
          <br/>
           <div className="container col-md-4 off-set-3">
            <br/><br/><br/>
            {
                    !_.isEmpty(props.multicity) &&(
                      <div>
                        <h2 className="text-light p-2 mb-3" style={{textAlign:"center"}}>Showing Your Roundtrip On- {props.multicity.startdate}</h2>
            <Row>
            <Col sm="12">
                <br/>
              <Card body inverse style={{borderColor: '#333'}} className= "bg-dark">
                <CardTitle>Travelling From - {props.multicity.from}</CardTitle>
                <CardText>Traveling To - {props.multicity.cities[0]} Then {props.multicity.cities[1]}</CardText>
                <CardTitle>Trip Ends On - {props.multicity.enddate}</CardTitle>
                <CardText>Your Ride - {props.multicity.car.model}</CardText>
                <CardText>Your Driver - {props.multicity.driver.name}</CardText>
                <CardText>Booked For - {props.multicity.details.name}</CardText>
                <Link to = "/multicities" className="link"> Go To Bookings </Link><br/>
                <Link to = {`/multicities/edit/${id}`} className="btn btn-primary"> Edit</Link><br/>
                <Button onClick={findDirection}>Map</Button>  
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
        multicity: state.multicities.find(multicity => multicity._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(MulticityShow)