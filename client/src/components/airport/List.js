import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startRemoveAirport } from '../actions/Airport'
import _ from 'lodash'
import {Row, Col,Container} from 'reactstrap'
import {Card, CardTitle, CardText,Button} from 'reactstrap'
import swal from 'sweetalert'
import axios from '../../config/axios';

class  AirportList extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleDelete = (id) => {
        swal({
            title: "Are you sure you want to Delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Successfully Deleted", {
                icon: "success",
              });
              this.props.dispatch(startRemoveAirport(id))
            } 
          })
    }
    render(){
        console.log(this.props.oneways)
    return (
        <React.Fragment>
            <br/>
            <div className='container'>
            <h1 className="mb-5"> Your Airport Rides - {this.props.airports.length}</h1> 
            <Row>
            {
                        this.props.airports.map((airport, index) => {
                            return (
                                <Col md="5" key={index}>
                                    <Card body inverse style={{borderColor: '#333' }} className="bg-dark mb-4">
                                        <CardTitle><h4>{index+1}:  {airport.from?airport.from:'NA'}</h4></CardTitle>
                                        
                                        <CardText>From: {airport.from} - To: {airport.to} Travel Date: {airport.date}</CardText>
                                        {/* oneway.body? oneway.body:'NA' */}
                                        <CardText>Trip - {airport.trip}</CardText>
                                        <CardText>Prefered Vehicle: {airport.car.model}</CardText>
                                        <CardText>Your Prefered Driver: {airport.driver.name}</CardText>
                                        <CardText>Ride Booked For: {airport.details.name}</CardText>
                                            {/* note.category ? note.category.name :'NA' */}
                                        <Container className="mt-3">
                                             <Row>
                                                 <Col md="5">
                                                     <Link to={`/airports/${airport._id}`}><Button color="primary">Show</Button></Link>
                                                 </Col>
                                                 <Col md="5">
                                                     <Button color="danger" onClick={()=>{this.handleDelete(airport._id)}}>remove</Button>
                                                 </Col>
                                             </Row>
                                         </Container>
                                    </Card>                                   
                                </Col>
                            )
                        })
                    }
            </Row>
            </div>
            <div className='container text-center'>
            <Link to="/airports/new" ><Button color="secondary" >Book New Trip</Button></Link>
            </div>
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       airports: state.airports
    }
}

export default connect(mapStateToProps)(AirportList)