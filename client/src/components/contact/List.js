import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startRemoveDetails, startAddDetail } from '../actions/details'
import ContactForm from './New'

import {Row, Col,Container} from 'reactstrap'
import {Card, CardTitle, CardText,Button} from 'reactstrap'
import swal from 'sweetalert'

class  ContactList extends React.Component{

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
              this.props.dispatch(startRemoveDetails(id))
            } 
          })
    }

     handleSubmit = (formData) => {
        this.props.dispatch(startAddDetail(formData))
    }

    render(){
        console.log(this.props.oneways)
    return (
        <React.Fragment>
            <br/>
            <div className="row">
            <div className="col-md-6">
            <h1 className="mb-4"> Your Contacts - {this.props.details.length}</h1> 
            <Row>
            {
                        this.props.details.map((contact, index) => {
                            return (
                                <Col md="5" key={index}>
                                    <Card body inverse style={{borderColor: '#333' }} className="bg-dark mb-4">
                                        <CardTitle><h4>{index+1}:  {contact.name ? contact.name : 'NA'}</h4></CardTitle>
                                        <CardText>Contact Name: {contact.name}</CardText>
                                        <CardText>Contact Email: {contact.email} </CardText>
                                        <CardText>Contact Phone No: {contact.phone}</CardText>
                                        <Container className="mt-3">
                                             <Row>
                                                 <Col md="6">
                                                 <Button color="danger" onClick={()=>{this.handleDelete(contact._id)}} className = "text-center">remove</Button>         
                                                 </Col>
                                                 <Col md="6">
                                                     {/* <Link to={`/contacts/${contact._id}`}><Button color="primary">edit</Button></Link> */}
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
            <div className="col-md-6">
            {/* <Link to="/contacts/new" ><Button color="secondary" >Add New Contact</Button></Link> */}
            <ContactForm handleSubmit = {this.handleSubmit} classes="table group"/>
            </div>
            </div>
           
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       details: state.details
    }
}

export default connect(mapStateToProps)(ContactList)