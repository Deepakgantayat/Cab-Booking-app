import React from 'react'
import Nav from '../oneway/Navbar'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

export default function Home(props){
    return (
        <div><br/><br/><br/><br/><br/>
            <div className="row">
        <div class="card-body col-md-3 mt-5">
            <h5 class="card-title">One Way</h5>
            <p class="card-text">Book Yor Oneway Trip Right Here. Just One Step Asway</p>
            {/* <a href="#" class="btn btn-primary"><Nav/>Go somewhere</a> */}
            <Link to = "/oneways">Book</Link>
        </div>
        <div class="card-body col-md-3 mt-5">
            <h5 class="card-title">Round Trip</h5>
            <p class="card-text">Book Your Round Trip Hassle Free. Book Now</p>
            <Link to = "/roundtrips">Book</Link>
        </div>
        <div class="card-body col-md-3 mt-5">
            <h5 class="card-title">Multi city</h5>
            <p class="card-text">Go Anywhere In India Without Any Worry.</p>
            <Link to = "/multicities">Book</Link>
        </div>
        <div class="card-body col-md-3 mt-5">
            <h5 class="card-title">Airport</h5>
            <p class="card-text">Book Your Ride Now. No Worry About Price Changes. Fixed Price </p>
            <Link to = "/multicities">Book</Link>
        </div>
        </div>
        </div>
        
    )
}
