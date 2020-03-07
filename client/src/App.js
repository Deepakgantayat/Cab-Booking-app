import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
import swal from 'sweetalert'

import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'

import ContactList from './components/contact/List'
import CarNew from './components/others/New'
import DriverNew from './components/others/Dnew'

import Nav from './components/oneway/Navbar'
import OnewayList from './components/oneway/List'
import OnewayShow from './components/oneway/Show'
import OnewayNew from './components/oneway/New'
import OnewayEdit from './components/oneway/Edit'

import RoundtripList from './components/roundtrip/List'
import RoundtripNew from './components/roundtrip/New'
import RoundtripShow from './components/roundtrip/Show'
import RoundtripEdit from './components/roundtrip/Edit'

import MulticityList from './components/multicity/List'
import MulticityNew from './components/multicity/New'
import MulticityShow from './components/multicity/Show'
import MulticityEdit from './components/multicity/Edit'

import AirportList from './components/airport/List'
import AirportShow from './components/airport/Show'
import AirportNew from './components/airport/New'
import AirportEdit from './components/airport/Edit'
import AirportConfirm from './components/airport/Confirm'

import {startLogoutUser} from './components/actions/users'

function App(props) {
  const handleLogout = () => {
    swal({
      title: "Are you sure you want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Successfully Logged out", {
          icon: "success",
        });               
        props.dispatch(startLogoutUser())
      } 
    })
   
   }

  return (
    <BrowserRouter>
    <div class="card bg-dark text-white">
    <img class="card-img" src="https://ak2.picdn.net/shutterstock/videos/22791292/thumb/1.jpg" alt="responsive image"/>
    <div class="card-img-overlay">
    <div className = "container-fluid">
    <nav className="navbar"> 
    {/* style={{ backgroundColor: '#999' }} */}
    <a href="#" className="navbar-brand " style={{textAlign:"end", color:"white"}}>INSTACAR</a>
      <ul className="nav justify-content-end">
  
        <li className="nav-item active " ><Link to = "/" className="nav-link"  style={{textAlign:"end", color:"white"}}>Home</Link></li>
        {
          !_.isEmpty(props.user) ?(
            <div className="nav justify-content-end">
              {/* <li className="nav-item"><Link to = "/users/account" className="nav-link"  style={{color:"white"}}>Account</Link></li> */}
              <li className="nav-item"><Link to = "/details" className="nav-link"  style={{color:"white"}}>Add Contact</Link></li>
             <li className="nav-item active" ><Link to ="#" className="nav-link" onClick= {handleLogout}  style={{color:"white"}}>Logout</Link></li>
          
            </div>
          ): (
            <div className="nav justify-content-end">
              <li className="nav-item"><Link to = "/users/register" className="nav-link" style={{ color:"white"}}>Register</Link></li>
              <li className="nav-item"><Link to = "/users/login" className="nav-link" style={{color:"white"}}>Login</Link></li>
            </div>
             )
          }
         </ul>
     </nav>

      <Switch>
      <Route path ="/" component = {Home} exact = {true}/>
      <Route path = "/users/register" component = {Register}/>
      <Route path = "/users/login" component = {Login}/>
      <Route path = "/users/account" component = {Account}/>

      <Route path = "/details" component = {ContactList}/>
      <Route path = "/deepak/add/cars" component = {CarNew}/>
      <Route path = "/deepak/add/drivers" component = {DriverNew}/>

      {/* <Route path = "/navbar" component = {Nav}/> */}
      <Route path = "/oneways" component = {OnewayList} exact={true}/>
      <Route path = "/oneways/new" component ={OnewayNew} exact={true}/>
      <Route path = "/oneways/edit/:id" component ={OnewayEdit} exact={true}/>
      <Route path = "/oneways/:id" component = {OnewayShow} exact={true}/>

      <Route path ="/roundtrips" component = {RoundtripList} exact={true}/>
      <Route path = "/roundtrips/new" component = {RoundtripNew} exact={true}/>
      <Route path = "/roundtrips/edit/:id" component = {RoundtripEdit} exact={true}/>
      <Route path = "/roundtrips/:id" component = {RoundtripShow} exact={true}/>

      <Route path ="/multicities" component = {MulticityList} exact={true}/>
      <Route path = "/multicities/new" component = {MulticityNew} exact={true}/>
      <Route path = "/multicities/edit/:id" component = {MulticityEdit} exact={true}/>
      <Route path = "/multicities/:id" component = {MulticityShow} exact={true}/>

      <Route path = "/airports" component = {AirportList} exact = {true}/>
      <Route path = "/airports/new" component = {AirportNew} exact={true}/>
      <Route path = "/airports/confirm/:id" component = {AirportConfirm} exact = {true}/>
      <Route path = "/airports/edit/:id" component = {AirportEdit} exact={true}/>
      <Route path = "/airports/:id" component = {AirportShow} exact = {true}/>
   
      </Switch>
    </div>
    </div>
    </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state,props) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App)