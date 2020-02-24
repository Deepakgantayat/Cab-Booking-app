import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
import OnewayList from './List'
import OnewayEdit from './Edit'
import OnewayNew from './New'
import OnewayShow from './Show'

function Nav(props) {

// const handleClick = () =>{
//     <onewayList/>
// }

  return (
    
    <div>
        <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href = "/oneways" >Active</a>
            {/* <Link to = "/oneways/list">List</Link> */}
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        </ul>
    </div>
        
  )
}


export default connect()(Nav)