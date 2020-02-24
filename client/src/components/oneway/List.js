import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startRemoveOneway } from '../actions/oneway'

import {Row, Col,Container} from 'reactstrap'
import {Card, CardTitle, CardText,Button} from 'reactstrap'
import swal from 'sweetalert'

class  OnewayList extends React.Component{

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
              this.props.dispatch(startRemoveOneway(id))
            } 
          })
    }
    render(){
        console.log(this.props.oneways)
    return (
        <React.Fragment>
            <br/>
            <div className='container'>
            <h1 className="mb-5"> Your Oneway Bookings - {this.props.oneways.length}</h1> 
            <Row>
            {
                        this.props.oneways.map((oneway, index) => {
                            return (
                                <Col md="5" key={index}>
                                    <Card body inverse style={{borderColor: '#333' }} className="bg-dark mb-4">
                                        <CardTitle><h4>{index+1}:  {oneway.from?oneway.from:'NA'}</h4></CardTitle>
                                        
                                        <CardText>From: {oneway.from} - To: {oneway.to} Travel Date: {oneway.date}</CardText>
                                        {/* oneway.body? oneway.body:'NA' */}
                                        <CardText>Prefered Vehicle: {oneway.car.model}</CardText>
                                        <CardText>Your Prefered Driver: {oneway.driver.name}</CardText>
                                            {/* note.category ? note.category.name :'NA' */}
                                        <Container className="mt-3">
                                             <Row>
                                                 <Col md="6">
                                                     <Link to={`/oneways/${oneway._id}`}><Button color="primary">edit</Button></Link>
                                                 </Col>
                                                 <Col md="6">
                                                     <Button color="danger" onClick={()=>{this.handleDelete(oneway._id)}}>remove</Button>
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
            <Link to="/oneways/new" ><Button color="secondary" >Book New Trip</Button></Link>
            </div>
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       oneways: state.oneway
    }
}

export default connect(mapStateToProps)(OnewayList)