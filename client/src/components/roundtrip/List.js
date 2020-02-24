import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startRemoveRoundtrip } from '../actions/roundtrip'

import {Row, Col,Container} from 'reactstrap'
import {Card, CardTitle, CardText,Button} from 'reactstrap'
import swal from 'sweetalert'

class  RoundtripList extends React.Component{

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
              this.props.dispatch(startRemoveRoundtrip(id))
            } 
          })
    }
    render(){
        console.log(this.props.oneways)
    return (
        <React.Fragment>
            <br/>
            <div className='container'>
            <h1 className="mb-5"> Your Roundtrip Bookings - {this.props.roundtrips.length}</h1> 
            <Row>
            {
                        this.props.roundtrips.map((roundtrip, index) => {
                            return (
                                <Col md="5" key={index}>
                                    <Card body inverse style={{borderColor: '#333'}} className="bg-dark mb-4">
                                        <CardTitle><h4>{index+1}:  {roundtrip.from?roundtrip.from:'NA'}</h4></CardTitle>
                                        
                                        <CardText>From: {roundtrip.from} - To: {roundtrip.to}</CardText>
                                        {/* oneway.body? oneway.body:'NA' */}
                                        <CardText>Travel Date: {roundtrip.startdate} Return Date: {roundtrip.enddate}</CardText>
                                        <CardText>Prefered Vehicle: {roundtrip.car.model}</CardText>
                                        <CardText>Your Prefered Driver: {roundtrip.driver.name}</CardText>
                                            {/* note.category ? note.category.name :'NA' */}
                                        <Container className="mt-3">
                                             <Row>
                                                 <Col md="6">
                                                     <Link to={`/roundtrips/${roundtrip._id}`}><Button color="primary">edit</Button></Link>
                                                 </Col>
                                                 <Col md="6">
                                                     <Button color="danger" onClick={()=>{this.handleDelete(roundtrip._id)}}>remove</Button>
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
            <Link to="/roundtrips/new" ><Button color="secondary" >Book New Roundtrip</Button></Link>
            </div>
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       roundtrips: state.roundtrips
    }
}

export default connect(mapStateToProps)(RoundtripList)