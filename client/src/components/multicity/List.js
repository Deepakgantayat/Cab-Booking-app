import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startRemoveMulticity } from '../actions/multicity'

import {Row, Col,Container} from 'reactstrap'
import {Card, CardTitle, CardText,Button} from 'reactstrap'
import swal from 'sweetalert'

class  MulticityList extends React.Component{

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
              this.props.dispatch(startRemoveMulticity(id))
            } 
          })
    }
    render(){
        console.log(this.props.oneways)
    return (
        <React.Fragment>
            <br/>
            <div className='container'>
            <h1 className="mb-5"> Your Bookings - {this.props.multicities.length}</h1> 
            <Row>
            {
                        this.props.multicities.map((multicity, index) => {
                            return (
                                <Col md="5" key={index}>
                                    <Card body inverse style={{borderColor: '#333' }} className="bg-dark mb-4">
                                        <CardTitle><h4>{index+1}:  {multicity.from?multicity.from:'NA'}</h4></CardTitle>
                                        
                                        <CardText>From: Bangalore - To: {multicity.cities[0]} And {multicity.cities[1]}</CardText>
                                        {/* oneway.body? oneway.body:'NA' */}
                                        <CardText>Travel Date: {multicity.startdate} Return Date: {multicity.enddate}</CardText>
                                        <CardText>Prefered Vehicle: {multicity.car.model}</CardText>
                                        <CardText>Your Prefered Driver: {multicity.driver.name}</CardText>
                                        <CardText>Ride Booked For: {multicity.details.name}</CardText>
                                            {/* note.category ? note.category.name :'NA' */}
                                        <Container className="mt-3">
                                             <Row>
                                                 <Col md="6">
                                                     <Link to={`/multicities/${multicity._id}`}><Button color="primary">edit</Button></Link>
                                                 </Col>
                                                 <Col md="6">
                                                     <Button color="danger" onClick={()=>{this.handleDelete(multicity._id)}}>remove</Button>
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
            <Link to="/multicities/new" ><Button color="secondary" >Add New Trip</Button></Link>
            </div>
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       multicities: state.multicities
    }
}

export default connect(mapStateToProps)(MulticityList)