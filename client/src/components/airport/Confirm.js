import React from 'react'
import {connect} from 'react-redux'
import  _ from 'lodash'
import {Link} from 'react-router-dom'
import { Card, CardTitle, CardText, Row, Col, Button } from 'reactstrap';

 class  AirportConfirm extends React.Component{
  
        render(){
         let id=this. props.match.params.id
          return(
         
            <div className="row">
              <br/>
               <div className="container col-md-4 off-set-3">
                <br/><br/><br/>
               
                  {
                      !_.isEmpty(this.props.airport) &&(
                        <div>
                        
                          <h2 className="text-light p-1 mb-2" style={{textAlign:"center"}}>Confirm Your Airport Trip On- {this.props.airport.date}</h2>
              <Row>
              <Col sm="12">
                  <br/>
                <Card body inverse style={{borderColor: '#333'}} className="bg-dark">
                  <CardTitle>Travelling From - {this.props.airport.from}</CardTitle>
                  <CardText>Traveling To - {this.props.airport.to}</CardText>
                  <CardText>Trip - {this.props.airport.trip}</CardText>
                  <CardText>Price - {this.props.airport.trip=="oneway" ? "900" : "1500" }</CardText>
                  <Link to = "/airports" className="link"> Go To Bookings </Link><br/>
                  <Button className="btn btn-success"> Pay Now </Button><br/> 
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
}

const mapStateToProps = (state, props) => {
    return {
        airport: state.airports.find(airport => airport._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(AirportConfirm)