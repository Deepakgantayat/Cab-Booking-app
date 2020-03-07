import React from 'react'
import {connect} from 'react-redux'
import  _ from 'lodash'
import axios from 'axios'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react"
import {Link} from 'react-router-dom'
// import {distance} from 'google-distance'
import { Card, CardTitle, CardText, Row, Col, Button } from 'reactstrap';

// function distance(lat1, lon1, lat2, lon2, unit) {
// 	if ((lat1 == lat2) && (lon1 == lon2)) {
// 		return 0;
// 	}
// 	else {
// 		var radlat1 = Math.PI * lat1/180;
// 		var radlat2 = Math.PI * lat2/180;
// 		var theta = lon1-lon2;
// 		var radtheta = Math.PI * theta/180;
// 		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
// 		if (dist > 1) {
// 			dist = 1;
// 		}
// 		dist = Math.acos(dist);
// 		dist = dist * 180/Math.PI;
// 		dist = dist * 60 * 1.1515;
// 		if (unit=="K") { dist = dist * 1.609344 }
//         if (unit=="N") { dist = dist * 0.8684 }
//         console.log(dist)
//         return dist;
        
// 	}
// }
// console.log(distance())


 class  RoundtripConfirm extends React.Component{
     constructor(props){
         super(props)
         this.state = {
             distance: ""
         }
     }
  handleClick = () => {
//    let distance= distance.get(
//         {
//           origin: 'San Francisco, CA',
//           destination: 'San Diego, CA'
//         },
//         // this.setState({distance: distance})
//         function(err, data) {
//             if (err) return console.log(err);
//             console.log(data);
//         });
    axios.get()
    }
        render(){
         let id=this. props.match.params.id
          return(
         
            <div className="row">
              <br/>
               <div className="container col-md-4 off-set-3">
                <br/><br/><br/>
               
                  {
                      !_.isEmpty(this.props.roundtrip) &&(
                        <div>
                        <h2>{this.state.distance}</h2>
                          <h2 className="text-light p-1 mb-2" style={{textAlign:"center"}}>Confirm Your Round Trip On- {this.props.roundtrip.date}</h2>
              <Row>
              <Col sm="12">
                  <br/>
                <Card body inverse style={{borderColor: '#333'}} className="bg-dark">
                  <CardTitle>Travelling From - {this.props.roundtrip.from}</CardTitle>
                  <CardText>Traveling To - {this.props.roundtrip.to}</CardText>
                  {/* <CardText>Trip - {this.props.roundtrip.trip}</CardText> */}
                  {/* <CardText>Price - {this.props.airport.trip=="oneway" ? "900" : "1500" }</CardText> */}
                  <Link to = "/roundtrips" className="link"> Go To Bookings </Link><br/>
                  <Button className="btn btn-success"> Pay Now </Button><br/> 
                  <Button className="btn btn-primary" onClick={this.handleClick}>GeT Distance</Button>
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
        roundtrip: state.roundtrips.find(roundtrip => roundtrip._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(RoundtripConfirm)