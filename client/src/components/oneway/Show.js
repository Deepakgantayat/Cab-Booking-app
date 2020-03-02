import React from 'react'
import {connect} from 'react-redux'
import  _ from 'lodash'
import {Link} from 'react-router-dom'
import { Card, CardTitle, CardText, Row, Col, Button } from 'reactstrap';

 class  OnewayShow extends React.Component{

   findDirection = () => {
    let city = this.props.oneway.from
    let url = `https://www.google.com/maps/place/${city}`;
    window.open(url);
  }
       
        // const {name,email,mobile} = this.props.customer
        render(){
         let id=this. props.match.params.id
          return(
         
            <div className="row">
              <br/>
               <div className="container col-md-4 off-set-3">
                <br/><br/><br/>
               
                  {
                      !_.isEmpty(this.props.oneway) &&(
                        <div>
                          <h2 className="text-light p-1 mb-2" style={{textAlign:"center"}}>Showing Your Oneway Trip On- {this.props.oneway.date}</h2>
              <Row>
              <Col sm="12">
                  <br/>
                <Card body inverse style={{borderColor: '#333'}} className="bg-dark">
                  <CardTitle>Travelling From - {this.props.oneway.from}</CardTitle>
                  <CardText>Traveling To - {this.props.oneway.to}</CardText>
                  <CardText>Your Ride - {this.props.oneway.car.model}</CardText>
                  <CardText>Your Driver - {this.props.oneway.driver.name}</CardText>
                  <CardText>Booked For - {this.props.oneway.details.name}</CardText>
                  <Link to = "/oneways" className="link"> Go To Bookings </Link><br/>
                  <Link to = {`/oneways/edit/${id}`} className="btn btn-primary"> Edit</Link><br/>
                  <Button onClick={this.findDirection}>Map</Button>  
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
        oneway: state.oneway.find(oneway => oneway._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(OnewayShow)